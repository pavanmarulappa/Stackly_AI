#correct working file
"""from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from django.utils import timezone
from dateutil.relativedelta import relativedelta
from appln.models import UserData, UserSubscription, BillingHistory  # Import BillingHistory
from asgiref.sync import sync_to_async
from jose import JWTError, jwt
import os
from uuid import uuid4
from fastapi_app.invoice_generator import generate_invoice_pdf
from django.db import transaction
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# Pricing and credits mappings as before
def get_price_for_plan(plan: str, duration: str) -> float:
    pricing = {
        "silver": {"monthly": 10.00, "yearly": 100.00},
        "gold": {"monthly": 20.00, "yearly": 200.00},
        "platinum": {"monthly": 30.00, "yearly": 300.00},
        "basic": {"monthly": 0.00, "yearly": 0.00},
    }
    if plan not in pricing or duration not in pricing[plan]:
        raise ValueError(f"Invalid plan or duration: {plan}, {duration}")
    return pricing[plan][duration]

def get_total_members(plan: str) -> int:
    return {
        "basic": 1,
        "silver": 1,
        "gold": 5,
        "platinum": 7
    }.get(plan, 1)

def get_credits_for_plan(plan: str) -> int:
    plan = plan.lower()
    return {
        "basic": 10,
        "silver": 20,
        "gold": 50,
        "platinum": 100
    }.get(plan, 0)

# Update subscription and create a billing record
@sync_to_async
def create_subscription_and_billing(user, new_plan: str, new_duration: str):
    try:
        with transaction.atomic():
            # Update subscription details
            subscription = UserSubscription.objects.get(user=user)  # Fetch from UserSubscription
            subscription.current_plan = new_plan
            subscription.duration = new_duration
            subscription.start_date = timezone.now().date()
            subscription.total_members = get_total_members(new_plan)
            subscription.original_price = get_price_for_plan(new_plan, new_duration)
            subscription.total_credits = get_credits_for_plan(new_plan)

            # Set renew and expiry dates
            if new_duration == 'monthly':
                subscription.renews_on = timezone.now().date() + relativedelta(months=1)
                subscription.plan_expiring_date = timezone.now() + relativedelta(months=1)
            elif new_duration == 'yearly':
                subscription.renews_on = timezone.now().date() + relativedelta(years=1)
                subscription.plan_expiring_date = timezone.now() + relativedelta(years=1)
            else:
                subscription.renews_on = None
                subscription.plan_expiring_date = None

            subscription.save()

            # Create a billing history entry
            billing = BillingHistory(
                user=user,
                plan_name=new_plan,
                amount=subscription.pricing,
                payment_method="credit_card",  # Static for now
                status="paid",  # Static for now
                invoice_id=str(uuid4()),
                paid_on=timezone.now().date()
            )
            billing.save()

            # Generate invoice PDF
            invoice_path = generate_invoice_pdf({
                "customer_name": subscription.name or "User",  # Now using 'name' from UserSubscription
                "email": subscription.email,  # Now using 'email' from UserSubscription
                "invoice_id": billing.invoice_id,
                "paid_on": billing.paid_on.strftime("%d-%m-%Y"),
                "renews_on": subscription.renews_on.strftime("%d-%m-%Y") if subscription.renews_on else "N/A",
                "plan": billing.plan_name,
                "duration": subscription.duration,  # Now using 'duration' from UserSubscription
                "start_date": subscription.start_date.strftime("%d-%m-%Y"),
                "expire_date": subscription.plan_expiring_date.strftime("%d-%m-%Y") if subscription.plan_expiring_date else "N/A",
                "amount": billing.amount,
                "payment_method": billing.payment_method,
                "logo_path": None,
            })

            billing.invoice = invoice_path
            billing.save()

            return subscription, billing

    except Exception as e:
        raise RuntimeError(f"Transaction failed: {str(e)}")


            
    """    """    billing.invoice = invoice_path
            billing.save()

            invoice_path = generate_invoice_pdf({
                "invoice_id": billing.invoice_id,
                "plan_name": billing.plan_name,
                "amount": billing.amount,
                "payment_method": billing.payment_method,
                "status": billing.status,
                "paid_on": billing.paid_on.strftime("%Y-%m-%d"),
            })

            
            billing.invoice = invoice_path
            billing.save()

            return subscription, billing

    except Exception as e:
        raise RuntimeError(f"Transaction failed: {str(e)}") """"""

# Extract the current user from the OAuth2 token
async def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email = payload.get("email")
        userid = payload.get("userid")
        return email, userid
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")

#comment it     
@router.post("/update-subscription/")
async def update_subscription(
    new_plan: str,
    new_duration: str,
    user_info: tuple = Depends(get_current_user)  # <-- this gets user from JWT token
):
#comment it   

@router.post("/update-subscription/")
async def update_subscription(new_plan: str, new_duration: str, email: str = None, userid: str = None):
    if not (email or userid):
        raise HTTPException(status_code=400, detail="Email or UserID required for testing")

    try:
        user = await sync_to_async(UserData.objects.get)(email=email) if email else await sync_to_async(UserData.objects.get)(userid=userid)
    except UserData.DoesNotExist:
        raise HTTPException(status_code=404, detail="User not found")

    # Update the user's subscription and create billing history
    subscription, billing = await create_subscription_and_billing(user, new_plan, new_duration)

    return {
        "message": "Subscription and billing record updated successfully",
        "subscription": {
            "plan": subscription.current_plan,
            "duration": subscription.duration,
            "original_price": subscription.original_price,
            "discount_price": subscription.discount_price,
            "renews_on": subscription.renews_on,
            "plan_expiring_date": subscription.plan_expiring_date
        },
        "billing": {
            "amount": billing.amount,
            "payment_method": billing.payment_method,
            "paid_on": billing.paid_on,
            "status": billing.status,
            "invoice_id": billing.invoice_id,
            "invoice_path": billing.invoice  # This stores the path to the invoice PDF
        }
    }
"""

"""from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from django.utils import timezone
from dateutil.relativedelta import relativedelta
from appln.models import UserData, UserSubscription, BillingHistory
from asgiref.sync import sync_to_async
from jose import JWTError, jwt
import os
from uuid import uuid4
from fastapi_app.invoice_generator import generate_invoice_pdf
from django.db import transaction
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


# Pricing and credits mappings
def get_price_for_plan(plan: str, duration: str) -> float:
    pricing = {
        "silver": {"monthly": 10.00, "yearly": 100.00},
        "gold": {"monthly": 20.00, "yearly": 200.00},
        "platinum": {"monthly": 30.00, "yearly": 300.00},
        "basic": {"monthly": 0.00, "yearly": 0.00},
    }
    if plan not in pricing or duration not in pricing[plan]:
        raise ValueError(f"Invalid plan or duration: {plan}, {duration}")
    return pricing[plan][duration]

def get_total_members(plan: str) -> int:
    return {
        "basic": 1,
        "silver": 1,
        "gold": 5,
        "platinum": 7
    }.get(plan, 1)

def get_credits_for_plan(plan: str) -> int:
    plan = plan.lower()
    return {
        "basic": 10,
        "silver": 20,
        "gold": 50,
        "platinum": 100
    }.get(plan, 0)


# Update subscription and create billing record
@sync_to_async
def create_subscription_and_billing(user, new_plan: str, new_duration: str):
    try:
        with transaction.atomic():
            subscription = UserSubscription.objects.get(user=user)
            subscription.current_plan = new_plan
            subscription.duration = new_duration
            subscription.start_date = timezone.now().date()
            subscription.total_members = get_total_members(new_plan)
            subscription.original_price = get_price_for_plan(new_plan, new_duration)
            subscription.total_credits = get_credits_for_plan(new_plan)

            # Set discount price (no coupon applied yet)
            if new_plan == "basic":
                subscription.discount_price = 0
            else:
                subscription.discount_price = subscription.original_price

            # Set renew and expiry dates
            if new_duration == 'monthly':
                subscription.renews_on = timezone.now().date() + relativedelta(months=1)
                subscription.plan_expiring_date = timezone.now() + relativedelta(months=1)
            elif new_duration == 'yearly':
                subscription.renews_on = timezone.now().date() + relativedelta(years=1)
                subscription.plan_expiring_date = timezone.now() + relativedelta(years=1)
            else:
                subscription.renews_on = None
                subscription.plan_expiring_date = None

            subscription.save()

            # Create billing history
            billing = BillingHistory(
                user=user,
                plan_name=new_plan,
                amount=subscription.discount_price,
                payment_method="credit_card",
                status="paid",
                invoice_id=str(uuid4()),
                paid_on=timezone.now().date()
            )
            billing.save()

            # Generate invoice PDF
            invoice_path = generate_invoice_pdf({
                "customer_name": user.first_name or "User",
                "email": user.email,
                "invoice_id": billing.invoice_id,
                "paid_on": billing.paid_on.strftime("%d-%m-%Y"),
                "renews_on": subscription.renews_on.strftime("%d-%m-%Y") if subscription.renews_on else "N/A",
                "plan": billing.plan_name,
                "duration": subscription.duration,
                "start_date": subscription.start_date.strftime("%d-%m-%Y"),
                "expire_date": subscription.plan_expiring_date.strftime("%d-%m-%Y") if subscription.plan_expiring_date else "N/A",
                "amount": billing.amount,
                "payment_method": billing.payment_method,
                "logo_path": None,
            })

            billing.invoice = invoice_path
            billing.save()

            return subscription, billing

    except Exception as e:
        raise RuntimeError(f"Transaction failed: {str(e)}")


# Extract user from JWT token (disabled below, testing version used instead)
async def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email = payload.get("email")
        userid = payload.get("userid")
        return email, userid
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")


#  Disabled this during testing mode
# @router.post("/update-subscription/")
# async def update_subscription(
#     new_plan: str,
#     new_duration: str,
#     user_info: tuple = Depends(get_current_user)
# ):

# ✅ Testing-compatible version with manual email/userid input
@router.post("/update-subscription/")
async def update_subscription(new_plan: str, new_duration: str, email: str = None, userid: str = None):
    if not (email or userid):
        raise HTTPException(status_code=400, detail="Email or UserID required for testing")

    try:
        user = await sync_to_async(UserData.objects.get)(email=email) if email else await sync_to_async(UserData.objects.get)(userid=userid)
    except UserData.DoesNotExist:
        raise HTTPException(status_code=404, detail="User not found")

    subscription, billing = await create_subscription_and_billing(user, new_plan, new_duration)

    return {
        "message": "Subscription and billing record updated successfully",
        "subscription": {
            "plan": subscription.current_plan,
            "duration": subscription.duration,
            "original_price": subscription.original_price,
            "discount_price": subscription.discount_price,
            "renews_on": subscription.renews_on,
            "plan_expiring_date": subscription.plan_expiring_date
        },
        "billing": {
            "amount": billing.amount,
            "payment_method": billing.payment_method,
            "paid_on": billing.paid_on,
            "status": billing.status,
            "invoice_id": billing.invoice_id,
            "invoice_path": billing.invoice
        }
    }"""


#well working 
"""from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from django.utils import timezone
from dateutil.relativedelta import relativedelta
from appln.models import UserData, UserSubscription, BillingHistory, BillingInfo
from asgiref.sync import sync_to_async
from jose import JWTError, jwt
import os
from uuid import uuid4
from pydantic import BaseModel
from fastapi_app.invoice_generator import generate_invoice_pdf

from django.db import transaction
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def get_price_for_plan(plan: str, duration: str) -> float:
    pricing = {
        "silver": {"monthly": 10.00, "yearly": 100.00},
        "gold": {"monthly": 20.00, "yearly": 200.00},
        "platinum": {"monthly": 30.00, "yearly": 300.00},
        "basic": {"monthly": 0.00, "yearly": 0.00},
    }
    if plan not in pricing or duration not in pricing[plan]:
        raise ValueError(f"Invalid plan or duration: {plan}, {duration}")
    return pricing[plan][duration]

def get_total_members(plan: str) -> int:
    return {
        "basic": 1,
        "silver": 1,
        "gold": 5,
        "platinum": 7
    }.get(plan, 1)

def get_credits_for_plan(plan: str) -> int:
    return {
        "basic": 10,
        "silver": 20,
        "gold": 50,
        "platinum": 100
    }.get(plan.lower(), 0)

class BillingInfoModel(BaseModel):
    full_name: str
    phone_number: str
    street_address: str
    city: str
    state: str
    country: str
    pincode: str

class SubscriptionData(BaseModel):
    email: str = None
    userid: str = None
    plan: str
    duration: str
    coupon_code: str = None
    payment_method: str
    billing_info: BillingInfoModel
    payment_success: bool = True

@router.post("/update-subscription/")
async def update_subscription(subscription_data: SubscriptionData):
    if not (subscription_data.email or subscription_data.userid):
        raise HTTPException(status_code=400, detail="Email or UserID required")

    try:
        # Fetch the user
        if subscription_data.email:
            user = await sync_to_async(UserData.objects.get)(email=subscription_data.email)
        else:
            user = await sync_to_async(UserData.objects.get)(userid=subscription_data.userid)
    except UserData.DoesNotExist:
        raise HTTPException(status_code=404, detail="User not found")

    try:
        # Run DB operations inside a transaction
        @sync_to_async
        @transaction.atomic
        def perform_db_operations():
            # Original price logic
            original_price = get_price_for_plan(subscription_data.plan, subscription_data.duration)
            discount_price = original_price  # apply discount if needed

            # Create or update subscription
            subscription, _ = UserSubscription.objects.get_or_create(user=user)
            subscription.current_plan = subscription_data.plan
            subscription.duration = subscription_data.duration
            subscription.start_date = timezone.now().date()
            subscription.original_price = original_price
            subscription.discount_price = discount_price
            subscription.total_members = get_total_members(subscription_data.plan)
            subscription.total_credits = get_credits_for_plan(subscription_data.plan)

            if subscription_data.duration == 'monthly':
                subscription.renews_on = timezone.now().date() + relativedelta(months=1)
                subscription.plan_expiring_date = timezone.now() + relativedelta(months=1)
            elif subscription_data.duration == 'yearly':
                subscription.renews_on = timezone.now().date() + relativedelta(years=1)
                subscription.plan_expiring_date = timezone.now() + relativedelta(years=1)
            else:
                subscription.renews_on = None
                subscription.plan_expiring_date = None

            subscription.save()

            # Save billing info
            BillingInfo.objects.create(
                user=user,
                full_name=subscription_data.billing_info.full_name,
                email=subscription_data.email,
                phone_number=subscription_data.billing_info.phone_number,
                street_address=subscription_data.billing_info.street_address,
                city=subscription_data.billing_info.city,
                state=subscription_data.billing_info.state,
                zip_code=subscription_data.billing_info.pincode,
                country=subscription_data.billing_info.country
            )

            # Create billing history
            billing = BillingHistory.objects.create(
                user=user,
                plan_name=subscription_data.plan,
                amount=discount_price,
                payment_method=subscription_data.payment_method,
                status="paid",
                invoice_id=str(uuid4()),
                paid_on=timezone.now().date()
            )

            # Generate invoice PDF
            invoice_path = generate_invoice_pdf({
                "customer_name": subscription_data.billing_info.full_name,
                "email": subscription_data.email,
                "invoice_id": billing.invoice_id,
                "paid_on": billing.paid_on.strftime("%d-%m-%Y"),
                "renews_on": subscription.renews_on.strftime("%d-%m-%Y") if subscription.renews_on else "N/A",
                "plan": billing.plan_name,
                "duration": subscription.duration,
                "start_date": subscription.start_date.strftime("%d-%m-%Y"),
                "expire_date": subscription.plan_expiring_date.strftime("%d-%m-%Y") if subscription.plan_expiring_date else "N/A",
                "amount": billing.amount,
                "payment_method": billing.payment_method,
                "logo_path": None,
            })

            billing.invoice = invoice_path
            billing.save()

        # Await the wrapped transaction logic
        await perform_db_operations()

        return {
            "message": "Subscription and billing completed successfully",
            "subscription": subscription_data
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Transaction failed: {str(e)}")"""

#add email logic with above well working file
"""from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from django.utils import timezone
from dateutil.relativedelta import relativedelta
from appln.models import UserData, UserSubscription, BillingHistory, BillingInfo
from asgiref.sync import sync_to_async
from jose import JWTError, jwt
import os
import random
from pydantic import BaseModel
from fastapi_app.invoice_generator import generate_invoice_pdf

from django.db import transaction
from dotenv import load_dotenv
import smtplib
from email.message import EmailMessage

# Load environment variables
load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def get_price_for_plan(plan: str, duration: str) -> float:
    pricing = {
        "silver": {"monthly": 10.00, "yearly": 100.00},
        "gold": {"monthly": 20.00, "yearly": 200.00},
        "platinum": {"monthly": 30.00, "yearly": 300.00},
        "basic": {"monthly": 0.00, "yearly": 0.00},
    }
    if plan not in pricing or duration not in pricing[plan]:
        raise ValueError(f"Invalid plan or duration: {plan}, {duration}")
    return pricing[plan][duration]

def get_total_members(plan: str) -> int:
    return {
        "basic": 1,
        "silver": 1,
        "gold": 5,
        "platinum": 7
    }.get(plan, 1)

def get_credits_for_plan(plan: str) -> int:
    return {
        "basic": 10,
        "silver": 20,
        "gold": 50,
        "platinum": 100
    }.get(plan.lower(), 0)

class BillingInfoModel(BaseModel):
    full_name: str
    phone_number: str
    street_address: str
    city: str
    state: str
    country: str
    pincode: str

class SubscriptionData(BaseModel):
    email: str = None
    userid: str = None
    plan: str
    duration: str
    coupon_code: str = None
    payment_method: str
    billing_info: BillingInfoModel
    payment_success: bool = True

def send_invoice_email(to_email, customer_name, invoice_path):
    try:
        msg = EmailMessage()
        msg["Subject"] = "Thank You for Upgrading Your Plan!"
        msg["From"] = os.getenv("SMTP_SENDER_EMAIL")
        msg["To"] = to_email
        msg.set_content(f
Hi {customer_name},

Thank you for upgrading your plan with us. Please find the invoice for your recent purchase attached.

If you have any questions, feel free to reach out.

Best regards,
Your Team
        )

        # Attach invoice PDF
        with open(invoice_path, 'rb') as f:
            file_data = f.read()
            file_name = os.path.basename(invoice_path)
            msg.add_attachment(file_data, maintype="application", subtype="pdf", filename=file_name)

        # Send email
        with smtplib.SMTP(os.getenv("SMTP_HOST"), int(os.getenv("SMTP_PORT"))) as server:
            server.starttls()
            server.login(os.getenv("SMTP_USER"), os.getenv("SMTP_PASS"))
            server.send_message(msg)

    except Exception as e:
        print(f"Failed to send email: {e}")

@router.post("/update-subscription/")
async def update_subscription(subscription_data: SubscriptionData):
    if not (subscription_data.email or subscription_data.userid):
        raise HTTPException(status_code=400, detail="Email or UserID required")

    try:
        # Fetch the user
        if subscription_data.email:
            user = await sync_to_async(UserData.objects.get)(email=subscription_data.email)
        else:
            user = await sync_to_async(UserData.objects.get)(userid=subscription_data.userid)
    except UserData.DoesNotExist:
        raise HTTPException(status_code=404, detail="User not found")

    try:
        @sync_to_async
        @transaction.atomic
        def perform_db_operations():
            original_price = get_price_for_plan(subscription_data.plan, subscription_data.duration)
            discount_price = original_price

            subscription, _ = UserSubscription.objects.get_or_create(user=user)
            subscription.current_plan = subscription_data.plan
            subscription.duration = subscription_data.duration
            subscription.start_date = timezone.now().date()
            subscription.original_price = original_price
            subscription.discount_price = discount_price
            subscription.total_members = get_total_members(subscription_data.plan)
            subscription.total_credits = get_credits_for_plan(subscription_data.plan)

            if subscription_data.duration == 'monthly':
                subscription.renews_on = timezone.now().date() + relativedelta(months=1)
                subscription.plan_expiring_date = timezone.now() + relativedelta(months=1)
            elif subscription_data.duration == 'yearly':
                subscription.renews_on = timezone.now().date() + relativedelta(years=1)
                subscription.plan_expiring_date = timezone.now() + relativedelta(years=1)
            else:
                subscription.renews_on = None
                subscription.plan_expiring_date = None

            subscription.save()

            BillingInfo.objects.create(
                user=user,
                full_name=subscription_data.billing_info.full_name,
                email=subscription_data.email,
                phone_number=subscription_data.billing_info.phone_number,
                street_address=subscription_data.billing_info.street_address,
                city=subscription_data.billing_info.city,
                state=subscription_data.billing_info.state,
                zip_code=subscription_data.billing_info.pincode,
                country=subscription_data.billing_info.country
            )

            billing = BillingHistory.objects.create(
                user=user,
                plan_name=subscription_data.plan,
                amount=discount_price,
                payment_method=subscription_data.payment_method,
                status="paid",
                invoice_id = f"INV-{timezone.now().strftime('%Y%m%d')}-{random.randint(1000, 9999)}",
                paid_on=timezone.now().date()
            )

            invoice_path = generate_invoice_pdf({
                "customer_name": subscription_data.billing_info.full_name,
                "email": subscription_data.email,
                "invoice_id": billing.invoice_id,
                "paid_on": billing.paid_on.strftime("%d-%m-%Y"),
                "renews_on": subscription.renews_on.strftime("%d-%m-%Y") if subscription.renews_on else "N/A",
                "plan": billing.plan_name,
                "duration": subscription.duration,
                "start_date": subscription.start_date.strftime("%d-%m-%Y"),
                "expire_date": subscription.plan_expiring_date.strftime("%d-%m-%Y") if subscription.plan_expiring_date else "N/A",
                "amount": billing.amount,
                "payment_method": billing.payment_method,
                "logo_path": None,
            })

            billing.invoice = invoice_path
            billing.save()

            # Send thank you email with invoice
            send_invoice_email(
                to_email=subscription_data.email,
                customer_name=subscription_data.billing_info.full_name,
                invoice_path=invoice_path
            )

        await perform_db_operations()

        return {
            "message": "Subscription, billing and invoice email sent successfully.",
            "subscription": subscription_data
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Transaction failed: {str(e)}")"""


#need stripe login
"""from fastapi import APIRouter, Depends, HTTPException, status, Request
from fastapi.security import OAuth2PasswordBearer
from django.utils import timezone
from dateutil.relativedelta import relativedelta
from appln.models import UserData, UserSubscription, BillingHistory, BillingInfo
from asgiref.sync import sync_to_async
from jose import JWTError, jwt
import os
from uuid import uuid4
from pydantic import BaseModel
from fastapi_app.invoice_generator import generate_invoice_pdf
import smtplib
from email.message import EmailMessage

from django.db import transaction
from dotenv import load_dotenv
import stripe

# Load environment variables
load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")
STRIPE_SECRET_KEY = os.getenv("STRIPE_SECRET_KEY")
FRONTEND_SUCCESS_URL = os.getenv("FRONTEND_SUCCESS_URL")  # URL after payment success
FRONTEND_CANCEL_URL = os.getenv("FRONTEND_CANCEL_URL")    # URL after payment cancel

stripe.api_key = STRIPE_SECRET_KEY

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def get_price_for_plan(plan: str, duration: str) -> float:
    pricing = {
        "silver": {"monthly": 10.00, "yearly": 100.00},
        "gold": {"monthly": 20.00, "yearly": 200.00},
        "platinum": {"monthly": 30.00, "yearly": 300.00},
        "basic": {"monthly": 0.00, "yearly": 0.00},
    }
    if plan not in pricing or duration not in pricing[plan]:
        raise ValueError(f"Invalid plan or duration: {plan}, {duration}")
    return pricing[plan][duration]

def get_total_members(plan: str) -> int:
    return {
        "basic": 1,
        "silver": 1,
        "gold": 5,
        "platinum": 7
    }.get(plan, 1)

def get_credits_for_plan(plan: str) -> int:
    return {
        "basic": 10,
        "silver": 20,
        "gold": 50,
        "platinum": 100
    }.get(plan.lower(), 0)

class BillingInfoModel(BaseModel):
    full_name: str
    phone_number: str
    street_address: str
    city: str
    state: str
    country: str
    pincode: str

class SubscriptionData(BaseModel):
    email: str = None
    userid: str = None
    plan: str
    duration: str
    coupon_code: str = None
    payment_method: str
    billing_info: BillingInfoModel
    payment_success: bool = True

def send_invoice_email(to_email, customer_name, invoice_path):
    try:
        msg = EmailMessage()
        msg["Subject"] = "Thank You for Upgrading Your Plan!"
        msg["From"] = os.getenv("SMTP_SENDER_EMAIL")
        msg["To"] = to_email
      msg.set_content(f
#Hi {customer_name},

#Thank you for upgrading your plan with us. Please find the invoice for your recent purchase attached.

#If you have any questions, feel free to reach out.

#Best regards,
#Your Team)

        # Attach invoice PDF
        with open(invoice_path, 'rb') as f:
            file_data = f.read()
            file_name = os.path.basename(invoice_path)
            msg.add_attachment(file_data, maintype="application", subtype="pdf", filename=file_name)

        # Send email
        with smtplib.SMTP(os.getenv("SMTP_HOST"), int(os.getenv("SMTP_PORT"))) as server:
            server.starttls()
            server.login(os.getenv("SMTP_USER"), os.getenv("SMTP_PASS"))
            server.send_message(msg)

    except Exception as e:
        print(f"Failed to send email: {e}")

@router.post("/create-checkout-session/")
async def create_checkout_session(subscription_data: SubscriptionData):
    try:
        price = get_price_for_plan(subscription_data.plan, subscription_data.duration)
        checkout_session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[{
                'price_data': {
                    'currency': 'inr',
                    'product_data': {
                        'name': f"{subscription_data.plan.capitalize()} Plan - {subscription_data.duration.capitalize()}"
                    },
                    'unit_amount': int(price * 100),
                },
                'quantity': 1
            }],
            mode='payment',
            success_url=FRONTEND_SUCCESS_URL + "?session_id={CHECKOUT_SESSION_ID}",
            cancel_url=FRONTEND_CANCEL_URL,
            metadata={
                "email": subscription_data.email or subscription_data.userid,
                "plan": subscription_data.plan,
                "duration": subscription_data.duration,
                "payment_method": subscription_data.payment_method,
                "full_name": subscription_data.billing_info.full_name
            }
        )
        return {"checkout_url": checkout_session.url}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/update-subscription/")
async def update_subscription(subscription_data: SubscriptionData):
    if not (subscription_data.email or subscription_data.userid):
        raise HTTPException(status_code=400, detail="Email or UserID required")

    try:
        # Fetch the user
        if subscription_data.email:
            user = await sync_to_async(UserData.objects.get)(email=subscription_data.email)
        else:
            user = await sync_to_async(UserData.objects.get)(userid=subscription_data.userid)
    except UserData.DoesNotExist:
        raise HTTPException(status_code=404, detail="User not found")

    try:
        # Run DB operations inside a transaction
        @sync_to_async
        @transaction.atomic
        def perform_db_operations():
            # Original price logic
            original_price = get_price_for_plan(subscription_data.plan, subscription_data.duration)
            discount_price = original_price  # apply discount if needed

            # Create or update subscription
            subscription, _ = UserSubscription.objects.get_or_create(user=user)
            subscription.current_plan = subscription_data.plan
            subscription.duration = subscription_data.duration
            subscription.start_date = timezone.now().date()
            subscription.original_price = original_price
            subscription.discount_price = discount_price
            subscription.total_members = get_total_members(subscription_data.plan)
            subscription.total_credits = get_credits_for_plan(subscription_data.plan)

            if subscription_data.duration == 'monthly':
                subscription.renews_on = timezone.now().date() + relativedelta(months=1)
                subscription.plan_expiring_date = timezone.now() + relativedelta(months=1)
            elif subscription_data.duration == 'yearly':
                subscription.renews_on = timezone.now().date() + relativedelta(years=1)
                subscription.plan_expiring_date = timezone.now() + relativedelta(years=1)
            else:
                subscription.renews_on = None
                subscription.plan_expiring_date = None

            subscription.save()

            # Save billing info
            BillingInfo.objects.create(
                user=user,
                full_name=subscription_data.billing_info.full_name,
                email=subscription_data.email,
                phone_number=subscription_data.billing_info.phone_number,
                street_address=subscription_data.billing_info.street_address,
                city=subscription_data.billing_info.city,
                state=subscription_data.billing_info.state,
                zip_code=subscription_data.billing_info.pincode,
                country=subscription_data.billing_info.country
            )

            # Create billing history
            billing = BillingHistory.objects.create(
                user=user,
                plan_name=subscription_data.plan,
                amount=discount_price,
                payment_method=subscription_data.payment_method,
                status="paid",
                invoice_id=str(uuid4()),
                paid_on=timezone.now().date()
            )

            # Generate invoice PDF
            invoice_path = generate_invoice_pdf({
                "customer_name": subscription_data.billing_info.full_name,
                "email": subscription_data.email,
                "invoice_id": billing.invoice_id,
                "paid_on": billing.paid_on.strftime("%d-%m-%Y"),
                "renews_on": subscription.renews_on.strftime("%d-%m-%Y") if subscription.renews_on else "N/A",
                "plan": billing.plan_name,
                "duration": subscription.duration,
                "start_date": subscription.start_date.strftime("%d-%m-%Y"),
                "expire_date": subscription.plan_expiring_date.strftime("%d-%m-%Y") if subscription.plan_expiring_date else "N/A",
                "amount": billing.amount,
                "payment_method": billing.payment_method,
                "logo_path": None,
            })

            billing.invoice = invoice_path
            billing.save()

            # Send thank you email with invoice
            send_invoice_email(
                to_email=subscription_data.email,
                customer_name=subscription_data.billing_info.full_name,
                invoice_path=invoice_path
            )

        await perform_db_operations()

        return {
            "message": "Subscription and billing completed successfully",
            "subscription": subscription_data
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Transaction failed: {str(e)}")"""


import stripe
import json
from fastapi import APIRouter, HTTPException, Query, Request
from fastapi.security import OAuth2PasswordBearer
from django.utils import timezone
from dateutil.relativedelta import relativedelta
from appln.models import UserData, UserSubscription, BillingHistory, BillingInfo, APIKeyManager
from asgiref.sync import sync_to_async
import random
from pydantic import BaseModel, EmailStr
from fastapi_app.invoice_generator import generate_invoice_pdf
import smtplib
import os
import string
import logging
from email.message import EmailMessage
from django.db import transaction
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")
STRIPE_SECRET_KEY = os.getenv("STRIPE_SECRET_KEY")
FRONTEND_SUCCESS_URL = os.getenv("FRONTEND_SUCCESS_URL")
FRONTEND_CANCEL_URL = os.getenv("FRONTEND_CANCEL_URL")
STRIPE_WEBHOOK_SECRET = os.getenv("STRIPE_WEBHOOK_SECRET")
FRONTEND_PRICING_URL = os.getenv("FRONTEND_PRICING_URL")

stripe.api_key = STRIPE_SECRET_KEY

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def get_price_for_plan(plan: str, duration: str) -> float:
    pricing = {
        "silver": {"monthly": 100.00, "yearly": 500.00},
        "gold": {"monthly": 200.00, "yearly": 700.00},
        "platinum": {"monthly": 300.00, "yearly": 900.00},
        "basic": {"monthly": 0.00, "yearly": 0.00},
    }
    if plan not in pricing or duration not in pricing[plan]:
        raise ValueError(f"Invalid plan or duration: {plan}, {duration}")
    return pricing[plan][duration]

def get_total_members(plan: str) -> int:
    return {
        "basic": 1,
        "silver": 1,
        "gold": 5,
        "platinum": 7
    }.get(plan.lower(), 1)

def get_credits_for_plan(plan: str) -> int:
    return {
        "basic": 10,
        "silver": 20,
        "gold": 50,
        "platinum": 100  # or -1 for unlimited
    }.get(plan.lower(), 0)

def get_discount_for_coupon(coupon_code: str, original_price: float) -> float:
    discount_percentage = 0
    if coupon_code == "DISCOUNT20":
        discount_percentage = 20
    # Extend coupon logic here
    return (original_price * discount_percentage) / 100

def get_credits_for_plan(plan: str) -> int:
    return {
        "basic": 10,
        "silver": 20,
        "gold": 50,
        "platinum": 100  # or -1 for unlimited
    }.get(plan.lower(), 0)

class BillingInfoModel(BaseModel):
    full_name: str
    email: str  
    phone_number: str
    street_address: str
    city: str
    state: str
    country: str
    pincode: str

class SubscriptionData(BaseModel):
    email: str = None
    userid: str = None
    plan: str
    duration: str
    coupon_code: str = None
    payment_method: str
    billing_info: BillingInfoModel
    payment_success: bool = True
    
class FailedPaymentEmailModel(BaseModel):
    email: EmailStr
    name: str

def send_invoice_email(to_email, customer_name, invoice_path):
    try:
        msg = EmailMessage()
        msg["Subject"] = "Thank You for Upgrading Your Plan!"
        msg["From"] = os.getenv("SMTP_SENDER_EMAIL")
        msg["To"] = to_email
        msg.set_content(f"""
Hi {customer_name},

Thank you for upgrading your plan with us. Please find the invoice for your recent purchase attached.

If you have any questions, feel free to reach out.

Best regards,
Your Team
""")
        # Attach PDF
        with open(invoice_path, 'rb') as f:
            file_data = f.read()
            file_name = os.path.basename(invoice_path)
            msg.add_attachment(file_data, maintype="application", subtype="pdf", filename=file_name)

        with smtplib.SMTP(os.getenv("SMTP_HOST"), int(os.getenv("SMTP_PORT"))) as server:
            server.starttls()
            server.login(os.getenv("SMTP_USER"), os.getenv("SMTP_PASS"))
            server.send_message(msg)
    except Exception as e:
        print(f"Failed to send email: {e}")


@router.post("/create-checkout-session/")
async def create_checkout_session(subscription_data: SubscriptionData):
    try:
        #user = await sync_to_async(UserData.objects.get)(id=user_id)
        user = await sync_to_async(UserData.objects.filter(id=subscription_data.userid).first)()
        if not user:
            raise HTTPException(status_code=404, detail="User not found with this ID")
        
        price = get_price_for_plan(subscription_data.plan, subscription_data.duration)
        if subscription_data.coupon_code:
            discount = get_discount_for_coupon(subscription_data.coupon_code, price)
            price -= discount
            price = max(price, 0.0)

        billing_info_str = json.dumps({
            "full_name": subscription_data.billing_info.full_name,
            "email": subscription_data.billing_info.email ,
            "phone_number": subscription_data.billing_info.phone_number,
            "street_address": subscription_data.billing_info.street_address,
            "city": subscription_data.billing_info.city,
            "state": subscription_data.billing_info.state,
            "country": subscription_data.billing_info.country,
            "pincode": subscription_data.billing_info.pincode
        })

        checkout_session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[{
                'price_data': {
                    'currency': 'inr',
                    'product_data': {
                        'name': f"{subscription_data.plan.capitalize()} Plan - {subscription_data.duration.capitalize()}"
                    },
                    'unit_amount': int(price * 100),
                },
                'quantity': 1
            }],
            mode='payment',
            success_url=FRONTEND_SUCCESS_URL + "?session_id={CHECKOUT_SESSION_ID}",
            cancel_url=FRONTEND_CANCEL_URL,
            metadata={
                "user_id": str(subscription_data.userid),
                "email": str(subscription_data.email),
                "userid": str(subscription_data.userid),
                "plan": str(subscription_data.plan),
                "duration": str(subscription_data.duration),
                "coupon_code": str(subscription_data.coupon_code),
                "payment_method": str(subscription_data.payment_method),
                "billing_info": billing_info_str,
                "payment_success": str(subscription_data.payment_success)
            }
        )
        return {"checkout_url": checkout_session.url}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

def generate_api_key():
    return ''.join(random.choices(string.ascii_letters + string.digits, k=32))

def create_unique_api_key():
    while True:
        api_key = generate_api_key()
        if not APIKeyManager.objects.filter(active_keys=api_key).exists():
            return api_key

@router.post("/stripe-webhook/")
async def stripe_webhook(request: Request):
    payload = await request.body()
    sig_header = request.headers.get("stripe-signature")
    event = None
    try:
        event = stripe.Webhook.construct_event(payload, sig_header, STRIPE_WEBHOOK_SECRET)
        logging.info(f"Received Stripe event: {event['type']}")
    except ValueError:
        # Invalid payload
        raise HTTPException(status_code=400, detail="Invalid payload")
    except stripe.error.SignatureVerificationError:
        # Invalid signature
        raise HTTPException(status_code=400, detail="Invalid signature")

    event_type = event["type"]
    data_object = event["data"]["object"]

    try:
        if event_type == "checkout.session.completed":
            # Call your update subscription function asynchronously
            from fastapi_app.pricing_page import update_subscription
            session_id = data_object.get("id")
            if session_id:
                await update_subscription(session_id=session_id)

        elif event_type == "payment_intent.succeeded":
            # Optional: handle successful payment intents
            logging.info(f"PaymentIntent succeeded: {data_object['id']}")

        elif event_type == "payment_intent.payment_failed":
            logging.warning(f"PaymentIntent failed: {data_object['id']}")

        elif event_type == "invoice.paid":
            logging.info(f"Invoice paid: {data_object['id']}")
            # handle subscription renewals or invoicing

        elif event_type == "invoice.payment_failed":
            logging.warning(f"Invoice payment failed: {data_object['id']}")
            # notify user or mark subscription as unpaid

        # Add more event types if needed...

    except Exception as e:
        logging.error(f"Error handling event {event_type}: {str(e)}")
        # Don't raise exception here, just log error and continue

    return {"status": "success"}

@router.get("/verify-payment/")
async def verify_payment(session_id: str = Query(..., description="Stripe Checkout Session ID")):
    try:
        checkout_session = stripe.checkout.Session.retrieve(session_id)
        if checkout_session.payment_status == "paid":
            return {
                "success": True,
                "message": "Payment verified",
                "payment_intent": checkout_session.payment_intent,
                "customer_email": checkout_session.customer_details.email if checkout_session.customer_details else None
            }
        else:
            return {
                "success": False,
                "message": "Payment not completed yet",
                "status": checkout_session.payment_status
            }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error verifying payment: {str(e)}")
    
@router.post("/update-subscription/")
async def update_subscription(session_id: str):
    try:
        # Check if this session has already been processed
        existing_billing = await sync_to_async(BillingHistory.objects.filter(transaction_id=session_id).exists)()
        if existing_billing:
            return {"message": "This session has already been processed"}

        # Retrieve session from Stripe
        checkout_session = stripe.checkout.Session.retrieve(session_id)
        metadata = checkout_session.metadata
        payment_intent_id = checkout_session.payment_intent

        # Retrieve user from metadata
        user_id = int(metadata.get("user_id"))
        user = await sync_to_async(UserData.objects.get)(id=user_id)
        user_email = user.email

        # Load billing info from metadata
        billing_info_data = json.loads(metadata.get("billing_info", "{}"))

        if checkout_session.payment_status != "paid":
            raise HTTPException(status_code=400, detail="Payment not successful.")

        @sync_to_async
        @transaction.atomic
        def perform_db_operations():
            # Step 1: Calculate prices and discount
            plan = metadata["plan"].lower()
            duration = metadata["duration"]
            original_price = get_price_for_plan(plan, duration)
            discount_amount = get_discount_for_coupon(metadata.get("coupon_code"), original_price)
            discount_price = original_price - discount_amount

            discount_percent = round((discount_amount / original_price) * 100) if discount_amount > 0 else 0

            # Step 2: Update UserSubscription
            subscription, _ = UserSubscription.objects.get_or_create(user=user)
            subscription.current_plan = plan
            subscription.duration = duration
            subscription.start_date = timezone.now().date()
            subscription.expiry_date = subscription.start_date + relativedelta(years=1) if duration == "yearly" else subscription.start_date + relativedelta(months=1)
            subscription.renews_on = subscription.expiry_date
            subscription.total_price = original_price
            subscription.discount_price = discount_price
            subscription.discount_amount = discount_amount
            subscription.discount_percentage = discount_percent
            subscription.is_active = True
            subscription.total_credits = get_credits_for_plan(plan)
            if subscription.duration == "yearly":
                subscription.expiry_date = subscription.start_date + relativedelta(years=1)
            else:
                subscription.expiry_date = subscription.start_date + relativedelta(months=1)
            subscription.save()


            # Step 3: Always assign a new API key and move old ones to revoked
            usage_count = 0
            new_api_key = create_unique_api_key()

            api_key_manager, created = APIKeyManager.objects.get_or_create(user=user)

            # Load active_keys safely as a list
            try:
                active_keys = json.loads(api_key_manager.active_keys) if isinstance(api_key_manager.active_keys, str) else (api_key_manager.active_keys or [])
            except Exception:
                active_keys = []

            # Load revoked_keys safely as a list
            try:
                revoked_keys = json.loads(api_key_manager.revoked_keys) if isinstance(api_key_manager.revoked_keys, str) else (api_key_manager.revoked_keys or [])
            except Exception:
                revoked_keys = []

            # Move existing active keys to revoked
            revoked_keys.extend(active_keys)

            # Set new key as the only active key
            api_key_manager.active_keys = json.dumps([new_api_key])
            api_key_manager.revoked_keys = json.dumps(revoked_keys)

            # Update APIKeyManager details
            api_key_manager.plan = plan
            api_key_manager.monthly_credits = get_credits_for_plan(plan)
            api_key_manager.usage_count = usage_count
            api_key_manager.is_active = True
            api_key_manager.save()

            # Step 4: Save billing info
            billing_info = BillingInfo.objects.create(
                user=user,
                full_name=billing_info_data.get("full_name", ""),
                email=billing_info_data.get("email",""),
                phone_number=billing_info_data.get("phone_number", ""),
                street_address=billing_info_data.get("street_address", ""),
                city=billing_info_data.get("city", ""),
                state=billing_info_data.get("state", ""),
                country=billing_info_data.get("country", ""),
                zip_code=billing_info_data.get("pincode", "")
            )

            # Step 5: Create billing history
            invoice_id = f"INV-{timezone.now().strftime('%Y%m%d')}-{random.randint(1000, 9999)}"
            billing = BillingHistory.objects.create(
                user=user,
                plan_name=plan,
                amount=discount_price,
                payment_method=metadata.get("payment_method", "unknown"),
                status="paid",
                invoice_id=invoice_id,
                transaction_id=payment_intent_id,
                paid_on=timezone.now().date()
            )

            # Step 6: Generate invoice PDF
            invoice_path = generate_invoice_pdf({
                "customer_name": billing_info.full_name,
                "email": billing_info.email,
                "invoice_id": invoice_id,
                "paid_on": billing.paid_on.strftime("%d-%m-%Y"),
                "renews_on": subscription.renews_on.strftime("%d-%m-%Y"),
                "plan": plan,
                "duration": duration,
                "start_date": subscription.start_date.strftime("%d-%m-%Y"),
                "expire_date": subscription.expiry_date.strftime("%d-%m-%Y"),
                "amount": original_price,
                "discount_price": discount_price,
                "discount_amount": discount_amount,
                "discount_percent": discount_percent,
                "payment_method": billing.payment_method,
                "transaction_id": payment_intent_id,
                "logo_path": None,
            })
            billing.invoice = invoice_path
            billing.save()

            # Step 7: Send invoice to customer
            send_invoice_email(
                to_email=billing_info.email,
                customer_name=billing_info.full_name,
                invoice_path=invoice_path
            )

            return {"message": "Subscription updated successfully!"}

        result = await perform_db_operations()
        return result

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {str(e)}")
    
def send_payment_failure_email(to_email: str, name: str):
    try:
        msg = EmailMessage()
        msg["Subject"] = "Payment Failed - Action Required"
        msg["From"] = os.getenv("SMTP_SENDER_EMAIL")
        msg["To"] = to_email

        msg.set_content(f"""
Hi {name},

Unfortunately, your recent payment attempt was unsuccessful.

Please try again to complete your subscription. If you continue to face issues, feel free to reach out to our support team.

Retry your payment here: {os.getenv("FRONTEND_PRICING_URL")}

Best regards,  
Your Support Team
""")


        with smtplib.SMTP(os.getenv("SMTP_HOST"), int(os.getenv("SMTP_PORT"))) as server:
            server.starttls()
            server.login(os.getenv("SMTP_USER"), os.getenv("SMTP_PASS"))
            server.send_message(msg)
    except Exception as e:
        print(f"Failed to send failure email: {e}")
        raise

# -------------------------------
# 🔁 API Endpoint
# -------------------------------
@router.post("/send-payment-failed-email")
async def send_payment_failed_email(data: FailedPaymentEmailModel):
    try:
        send_payment_failure_email(data.email, data.name)
        return {"message": "Failure email sent successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error sending failure email: {str(e)}")





"""@router.post("/update-subscription/")
async def update_subscription(session_id: str):
    try:
        # Check if this session has already been processed
        existing_billing = await sync_to_async(BillingHistory.objects.filter(transaction_id=session_id).exists)()
        if existing_billing:
            return {"message": "This session has already been processed"}
        
        checkout_session = stripe.checkout.Session.retrieve(session_id)
        metadata = checkout_session.metadata
        payment_intent_id = checkout_session.payment_intent

        # Get user from metadata (email or user ID) and create subscription
        # user_email = metadata.get("email")
        # user = await sync_to_async(UserData.objects.get)(email=user_email)
        
        user_id = int(metadata.get("user_id"))  # You should have passed user_id in metadata
        user = await sync_to_async(UserData.objects.get)(id=user_id)

        billing_info_data = json.loads(metadata.get("billing_info", "{}"))
        billing_email = billing_info_data.get("email", user_email)

        if checkout_session.payment_status != "paid":
            raise HTTPException(status_code=400, detail="Payment not successful.")

        @sync_to_async
        @transaction.atomic
        def perform_db_operations():
            original_price = get_price_for_plan(metadata["plan"], metadata["duration"])
            discount_amount = get_discount_for_coupon(metadata.get("coupon_code"), original_price)
            discount_price = original_price - discount_amount

            if discount_price < original_price:
                discount_amount_inr = discount_amount
                discount_percent = round((discount_amount_inr / original_price) * 100)
            else:
                discount_amount_inr = 0
                discount_percent = 0

            subscription, _ = UserSubscription.objects.get_or_create(user=user)
            old_plan = subscription.current_plan if subscription.current_plan else "basic"
            new_plan = metadata["plan"].lower()

            subscription.current_plan = new_plan
            subscription.duration = metadata["duration"]
            subscription.start_date = timezone.now().date()
            subscription.discount_price = discount_price
            subscription.discount_percentage = discount_percent 
            subscription.total_price = original_price
            subscription.discount_amount = discount_amount_inr
            subscription.is_active = True
            subscription.total_credits = get_credits_for_plan(new_plan)

            if subscription.duration == "yearly":
                subscription.expiry_date = subscription.start_date + relativedelta(years=1)
            else:
                subscription.expiry_date = subscription.start_date + relativedelta(months=1)
            subscription.save()

            usage_count = 0
            api_key_manager, created = APIKeyManager.objects.get_or_create(user=user)
            if created:
                api_key_manager.active_keys = []
                api_key_manager.revoked_keys = []
                api_key_manager.usage_count = usage_count
                api_key_manager.is_active = True
            else:
                if isinstance(api_key_manager.active_keys, str):
                    # If stored as JSON string, parse it
                    try:
                        api_key_manager.active_keys = json.loads(api_key_manager.active_keys)
                    except Exception:
                        api_key_manager.active_keys = []

            # Check if user has active keys; if none, generate new key
            if not api_key_manager.active_keys:
                new_api_key = create_unique_api_key()
                api_key_manager.active_keys = [new_api_key]

            api_key_manager.plan = new_plan
            api_key_manager.monthly_credits = get_credits_for_plan(new_plan)
            api_key_manager.usage_count = usage_count
            api_key_manager.is_active = True
            api_key_manager.save()

            # Save billing info
            billing_info = BillingInfo(
                user=user,
                full_name=billing_info_data.get("full_name", ""),
                phone_number=billing_info_data.get("phone_number", ""),
                street_address=billing_info_data.get("street_address", ""),
                city=billing_info_data.get("city", ""),
                state=billing_info_data.get("state", ""),
                country=billing_info_data.get("country", ""),
                zip_code=billing_info_data.get("pincode", ""),
            )
            billing_info.save()

            # Create billing history
            billing = BillingHistory.objects.create(
                user=user,
                plan_name=metadata["plan"],
                amount=discount_price,
                payment_method=metadata["payment_method"],
                status="paid",
                invoice_id=f"INV-{timezone.now().strftime('%Y%m%d')}-{random.randint(1000, 9999)}",
                transaction_id=payment_intent_id,
                paid_on=timezone.now().date()
            )
            # Generate invoice PDF with minimal data (price, name, email, etc.)
            invoice_path = generate_invoice_pdf({
                "customer_name": billing_info_data["full_name"],
                "email": user_email,
                "invoice_id": billing.invoice_id,
                "paid_on": billing.paid_on.strftime("%d-%m-%Y"),
                "renews_on": subscription.renews_on.strftime("%d-%m-%Y") if subscription.renews_on else "N/A",
                "plan": billing.plan_name,
                "duration": subscription.duration,
                "start_date": subscription.start_date.strftime("%d-%m-%Y"),
                "expire_date": subscription.plan_expiring_date.strftime("%d-%m-%Y") if subscription.plan_expiring_date else "N/A",
                #"amount": billing.amount,
                "amount" : subscription.original_price,
                "payment_method": billing.payment_method,
                "transaction_id": billing.transaction_id,
                "logo_path": None,
                "discount_price": subscription.discount_price,
                "discount_amount": discount_amount_inr,  # Discount amount in ₹
                "discount_percent": discount_percent,
            })
            billing.invoice = invoice_path
            billing.save()


            # Send invoice email
            send_invoice_email(
                to_email=user_email,
                customer_name=billing_info_data["full_name"],
                invoice_path=invoice_path
            )

            return {"message": "Subscription updated successfully!"}

        # Perform database operation
        result = await perform_db_operations()
        return result

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))"""






