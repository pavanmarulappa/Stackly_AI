"""# fastapi_backend/api.py (Updated for Real-world Workflow)

from fastapi import APIRouter, HTTPException, Depends, Form, Query
from pydantic import BaseModel
from datetime import datetime
from typing import Optional

from django_setup import setup_django
setup_django()

from django.utils import timezone
from django.core.exceptions import ObjectDoesNotExist

from appln.models import UserData, APIKeyManager, APILog, ApiAccessRequest
from auth import get_current_user  # Ensure this works in your import structure

router = APIRouter()

# ----------------------- Pydantic Models -----------------------
class ApiAccessRequestInput(BaseModel):
    use_case: str
    expected_requests_per_day: int
    platform: str
    budget: str

# ----------------------- 1. Request API Access -----------------------
@router.post("/request-api-access")
def request_api_access(data: ApiAccessRequestInput, user: UserData = Depends(get_current_user)):
    ApiAccessRequest.objects.create(
        user=user,
        use_case=data.use_case,
        expected_requests_per_day=data.expected_requests_per_day,
        platform=data.platform,
        budget=data.budget,
        requested_on=timezone.now()
    )
    return {"detail": "API access request submitted successfully"}

# ----------------------- 2. Generate New API Key -----------------------
@router.post("/generate-api-key")
def generate_api_key(user: UserData = Depends(get_current_user)):
    manager, _ = APIKeyManager.objects.get_or_create(user=user)
    key = manager.generate_key()

    if not key:
        raise HTTPException(status_code=400, detail="API key limit reached or account inactive.")

    return {"api_key": key}

# ----------------------- 3. Revoke API Key -----------------------
@router.post("/revoke-api-key")
def revoke_api_key(key: str, user: UserData = Depends(get_current_user)):
    try:
        manager = APIKeyManager.objects.get(user=user)
    except ObjectDoesNotExist:
        raise HTTPException(status_code=404, detail="API manager not found")

    success = manager.revoke_key(key)
    if success:
        return {"detail": "Key revoked successfully"}
    else:
        raise HTTPException(status_code=404, detail="Key not found or already revoked")

# ----------------------- 4. Use API Key & Track Usage -----------------------
@router.post("/use-api-key")
def use_api_key(key: str, endpoint: str):
    try:
        manager = APIKeyManager.objects.get(active_keys__contains=[{"key": key}])
    except ObjectDoesNotExist:
        raise HTTPException(status_code=404, detail="API key not found")

    success = manager.increment_usage(key)

    APILog.objects.create(
        api_key=manager,
        endpoint=endpoint,
        status_code=200 if success else 429,
        message="Success" if success else "Credit limit exceeded",
        timestamp=timezone.now()
    )

    if success:
        return {"detail": "Usage recorded"}
    else:
        raise HTTPException(status_code=429, detail="Credit limit exceeded")

# ----------------------- 5. Admin: Reset Credits -----------------------
@router.post("/reset-all-credits")
def reset_all_credits():
    for manager in APIKeyManager.objects.all():
        manager.reset_credits()
    return {"detail": "All API credits have been reset"}

# ----------------------- 6. View API Logs -----------------------
@router.get("/api-logs")
def get_logs(user: UserData = Depends(get_current_user)):
    try:
        manager = APIKeyManager.objects.get(user=user)
    except ObjectDoesNotExist:
        raise HTTPException(status_code=404, detail="API manager not found")

    logs = manager.logs.all().order_by("-timestamp").values(
        "endpoint", "status_code", "message", "timestamp"
    )
    return {"logs": list(logs)}

# ----------------------- 7. View All API Keys -----------------------
@router.get("/api-keys")
def get_api_keys(user: UserData = Depends(get_current_user)):
    try:
        manager = APIKeyManager.objects.get(user=user)
    except ObjectDoesNotExist:
        raise HTTPException(status_code=404, detail="API manager not found")

    return {
        "active_keys": manager.active_keys,
        "revoked_keys": manager.revoked_keys,
        "plan": manager.plan,
        "credits_used": manager.usage_count,
        "credits_remaining": manager.monthly_credits - manager.usage_count,
        "keys_remaining": manager.keys_remaining,
        "is_active": manager.is_active,
        "created_at": manager.created_at,
        "updated_at": manager.updated_at,
    }
"""
#api.py
from fastapi import APIRouter, HTTPException, Depends
from datetime import datetime, timedelta
from django.utils import timezone
from django.db import transaction, IntegrityError
from appln.models import APIKeyManager, UserData, ApiAccessRequest
import secrets
from pydantic import BaseModel,constr
from typing import Optional
import smtplib
from email.mime.text import MIMEText
import os
from fastapi_app.django_setup import django_setup

django_setup()

router = APIRouter()

class ApiAccessRequestSchema(BaseModel):
    user_id: int
    full_name: str
    email: str
    contact_number: str
    company_name: Optional[str] = ""
    address: Optional[str] = ""
    message: constr(max_length=500) = "Requesting access to API"
    
# Helper: Get credits for a plan
def get_credit_limit(plan: str) -> int:
    return {
        'basic': 10,
        'pro': 50,
        'enterprise': 999999  # Unlimited
    }.get(plan, 10)

# 1. Monthly Key Auto-Rotation & Credit Reset
@router.post("/rotate-api-keys")
def rotate_api_keys():
    all_keys = APIKeyManager.objects.all()
    now = timezone.now()

    for key_obj in all_keys:
        if key_obj.plan == 'basic':
            time_ref = key_obj.created_at
        else:
            time_ref = key_obj.updated_at

        if (now - time_ref) >= timedelta(days=30):
            old_key_entry = key_obj.active_keys[0] if key_obj.active_keys else None

            # Generate new key
            new_key = secrets.token_urlsafe(32)
            key_obj.active_keys = [{
                'key': new_key,
                'created_at': now.strftime("%Y-%m-%d %H:%M:%S")
            }]

            # Move old key to revoked list
            if old_key_entry:
                key_obj.revoked_keys.append({
                    'key': old_key_entry['key'],
                    'revoked_at': now.strftime("%Y-%m-%d %H:%M:%S"),
                    'reason': 'Auto-rotation after 30 days'
                })

            # Reset values
            key_obj.monthly_credits = get_credit_limit(key_obj.plan)
            key_obj.usage_count = 0
            key_obj.credits_remaining = key_obj.monthly_credits
            key_obj.is_active = True
            key_obj.updated_at = now
            key_obj.save()

    return {"message": "API keys rotated and credits reset successfully."}

# 2. API Usage Endpoint - Increment Usage & Check Credits
@router.post("/use-api")
def use_api(user_id: int):
    try:
        key_data = APIKeyManager.objects.get(user__id=user_id)
    except APIKeyManager.DoesNotExist:
        raise HTTPException(status_code=404, detail="API Key not found.")

    if not key_data.is_active:
        raise HTTPException(status_code=403, detail="API key is inactive or credits exhausted.")

    key_data.usage_count += 1
    key_data.credits_remaining = key_data.monthly_credits - key_data.usage_count

    if key_data.credits_remaining <= 0 and key_data.plan != 'enterprise':
        key_data.is_active = False

    key_data.save()

    return {"message": "API usage recorded.", "credits_remaining": key_data.credits_remaining}

# 3. Store API Access Request Form Submission
@router.post("/submit-api-access")
def submit_api_request(data: ApiAccessRequestSchema):
    try:
        user = UserData.objects.get(id=data.user_id)
    except UserData.DoesNotExist:
        raise HTTPException(status_code=404, detail="User not found.")

    try:
        with transaction.atomic():  # ✅ Correct usage
            ApiAccessRequest.objects.create(
                user=user,
                full_name=data.full_name,
                email=data.email,
                contact_number=data.contact_number,
                company_name=data.company_name,
                address=data.address,
                message=data.message,
            )
 
            # ✅ Move inside the transaction
            #send_api_request_confirmation(data.email, data.full_name)

        return {"message": "API access request submitted successfully."}

    except Exception:
        raise HTTPException(status_code=500, detail="Something went wrong. Please try again later.")

def send_api_request_confirmation(to_email, full_name):
    subject = "StacklyAI API Access Request Received"
    body = f"""
Hi {full_name},

Thank you for requesting access to the StacklyAI API.

We've received your request and our team will review it shortly.
You’ll be notified by email once it's approved and your API key is issued.

If you have any questions, contact us at support@stackly.ai.

– StacklyAI Team
"""

    # Construct MIME email
    msg = MIMEText(body)
    msg["Subject"] = subject
    msg["From"] = os.getenv("EMAIL_FROM")          
    msg["To"] = to_email

    try:
        smtp_host = os.getenv("SMTP_HOST")          
        smtp_port = int(os.getenv("SMTP_PORT", 587))
        smtp_user = os.getenv("SMTP_USER")
        smtp_pass = os.getenv("SMTP_PASS")

        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_pass)
            server.send_message(msg)
    except Exception:
        pass
