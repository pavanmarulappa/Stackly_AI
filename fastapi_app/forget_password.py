"""import smtplib
from email.mime.text import MIMEText
from datetime import datetime, timedelta
import secrets
import logging
from typing import Dict
from fastapi_app.config import settings

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s"
)


otp_storage: Dict[str, dict] = {}


class OTPManager:
    @staticmethod
    def send_otp_email(email: str, otp: str) -> bool:
       # Send OTP using Gmail or Mailtrap based on settings
        try:
            msg = MIMEText(
                f"Hi, \n\nYour one-time password (OTP) is:  {otp},\n\nThis code is valid for the next {settings.OTP_EXPIRE_MINUTES} minutes. Please do not share it with anyone.\n\nIf you didn’t request this OTP, please ignore this message or contact our support team.\n\n-Thanks,\n\n-The Stackly.Ai Team"
            )
            msg['Subject'] = 'Your Stackly.Ai OTP Code'
            msg['From'] = settings.EMAIL_FROM
            msg['To'] = email

            with smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT) as server:
                server.starttls()  # Needed for Gmail, harmless for Mailtrap
                server.login(settings.SMTP_USER, settings.SMTP_PASS)
                server.send_message(msg)

            logging.info(f"OTP sent to {email}")
            return True

        except Exception as e:
            logging.error(f"Failed to send OTP email to {email}: {str(e)}")
            return False

    @staticmethod
    def generate_otp(email: str) -> str:
        #Core OTP generation with real-time delivery
        # Clear previous OTPs
        if email in otp_storage:
            del otp_storage[email]

        otp = str(secrets.randbelow(10**6)).zfill(6)
        expires_at = datetime.now() + timedelta(minutes=settings.OTP_EXPIRE_MINUTES)
        
        otp_storage[email] = {
            'otp': otp,
            'expires_at': expires_at,
            'is_used': False
        }

        # Attempt Mailtrap delivery
        if not OTPManager.send_otp_email(email, otp):
            # Fallback to console if Mailtrap fails
            logging.warning(f"OTP for {email}: {otp} (Fallback to console)")
            print(f"\n OTP for {email}: {otp}\n")

        return otp

    @staticmethod
    def verify_otp(email: str, otp: str) -> bool:
        #Verify OTP with strict checks
        record = otp_storage.get(email)
        if not record:
            logging.warning(f"No OTP found for {email}")
            return False
            
        return (
            record['otp'] == otp
            and not record['is_used']
            and datetime.now() < record['expires_at']
        )

    @staticmethod
    def mark_used(email: str):
        #Invalidate OTP after successful reset
        if email in otp_storage:
            otp_storage[email]['is_used'] = True
            logging.info(f"Marked OTP used for {email}")"""

# forget_password.py

"""import smtplib
import secrets
import logging
from datetime import datetime, timedelta
from email.mime.text import MIMEText
from typing import Dict
from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel, EmailStr
from django.contrib.auth.hashers import make_password
from appln.models import UserData  # Django model
from fastapi_app.config import settings

# Logger setup
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")

router = APIRouter()
otp_storage: Dict[str, dict] = {}
verified_emails: Dict[str, bool] = {}

# ---------------- Models ----------------
class EmailRequest(BaseModel):
    email: EmailStr

class OTPOnlyRequest(BaseModel):
    otp: str

class PasswordResetRequest(BaseModel):
    new_password: str
    confirm_password: str

# ---------------- OTP Manager ----------------
class OTPManager:
    @staticmethod
    def send_otp_email(email: str, otp: str) -> bool:
        try:
            msg = MIMEText(
                f"Hi,\n\nYour one-time password (OTP) is: {otp}\n\n"
                f"This code is valid for the next {settings.OTP_EXPIRE_MINUTES} minutes.\n"
                f"Do not share it with anyone.\n\n- Stackly.Ai Team"
            )
            msg["Subject"] = "Your Stackly.Ai OTP Code"
            msg["From"] = settings.EMAIL_FROM
            msg["To"] = email

            with smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT) as server:
                server.starttls()
                server.login(settings.SMTP_USER, settings.SMTP_PASS)
                server.send_message(msg)

            logging.info(f"OTP sent to {email}")
            return True
        except Exception as e:
            logging.error(f"Failed to send OTP to {email}: {str(e)}")
            return False

    @staticmethod
    def generate_otp(email: str) -> str:
        otp = str(secrets.randbelow(10**6)).zfill(6)
        expires_at = datetime.now() + timedelta(minutes=settings.OTP_EXPIRE_MINUTES)

        otp_storage[email] = {
            "otp": otp,
            "expires_at": expires_at,
            "is_used": False
        }

        if not OTPManager.send_otp_email(email, otp):
            logging.warning(f"Fallback: OTP for {email} is {otp}")
            print(f"\nOTP for {email}: {otp}\n")

        return otp

    @staticmethod
    def verify_otp(email: str, otp: str) -> bool:
        record = otp_storage.get(email)
        return (
            record
            and record["otp"] == otp
            and not record["is_used"]
            and datetime.now() < record["expires_at"]
        )

    @staticmethod
    def mark_used(email: str):
        if email in otp_storage:
            otp_storage[email]["is_used"] = True
            logging.info(f"Marked OTP used for {email}")

# ---------------- Endpoints ----------------

@router.post("/forget-password/send-otp")
def send_otp(request: EmailRequest):
    email = request.email
    try:
        user = UserData.objects.get(email=email)
    except UserData.DoesNotExist:
        raise HTTPException(status_code=404, detail="User not found")

    OTPManager.generate_otp(email)
    return {"message": "OTP sent to email"}

@router.post("/forget-password/resend-otp")
def resend_otp(request: EmailRequest):
    email = request.email

    try:
        user = UserData.objects.get(email=email)
    except UserData.DoesNotExist:
        raise HTTPException(status_code=404, detail="User not found")

    # Just regenerate and resend the OTP
    OTPManager.generate_otp(email)
    return {"message": "OTP resent successfully"}

@router.post("/forget-password/verify-otp")
def verify_otp(request: OTPOnlyRequest):
    otp = request.otp
    for email, data in otp_storage.items():
        if data["otp"] == otp:
            if datetime.now() > data["expires_at"]:
                raise HTTPException(status_code=400, detail="OTP expired")
            if data["is_used"]:
                raise HTTPException(status_code=400, detail="OTP already used")
            verified_emails[email] = True
            return {"message": "OTP verified successfully"}
    raise HTTPException(status_code=400, detail="Invalid OTP")

@router.post("/forget-password/reset-password")
def reset_password(request: PasswordResetRequest):
    # Find verified email
    email = next((e for e, verified in verified_emails.items() if verified), None)
    if not email:
        raise HTTPException(status_code=400, detail="OTP not verified yet")

    if request.new_password != request.confirm_password:
        raise HTTPException(status_code=400, detail="Passwords do not match")

    OTPManager.mark_used(email)
    verified_emails.pop(email, None)

    try:
        user = UserData.objects.get(email=email)
        user.password = make_password(request.new_password)
        user.save()
        return {"message": "Password updated successfully"}
    except UserData.DoesNotExist:
        raise HTTPException(status_code=404, detail="User not found")"""


"""import smtplib
import secrets
import logging
from datetime import datetime, timedelta
from email.mime.text import MIMEText
from typing import Dict
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from django.contrib.auth.hashers import make_password
from appln.models import UserData  # Django model
from fastapi_app.config import settings

# Logger setup
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")

router = APIRouter()
otp_storage: Dict[str, dict] = {}
verified_emails: Dict[str, bool] = {}
otp_request_times: Dict[str, datetime] = {}

# ---------------- Models ----------------
class EmailRequest(BaseModel):
    email: EmailStr

class OTPOnlyRequest(BaseModel):
    otp: str

class PasswordResetRequest(BaseModel):
    new_password: str
    confirm_password: str

# ---------------- OTP Manager ----------------
class OTPManager:
    @staticmethod
    def send_otp_email(email: str, otp: str) -> bool:
        try:
            msg = MIMEText(
                f"Hi,\n\nYour one-time password (OTP) is: {otp}\n\n"
                f"This code is valid for the next {settings.OTP_EXPIRE_MINUTES} minutes.\n"
                f"Do not share it with anyone.\n\n- Stackly.Ai Team"
            )
            msg["Subject"] = "Your Stackly.Ai OTP Code"
            msg["From"] = settings.EMAIL_FROM
            msg["To"] = email

            with smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT) as server:
                server.starttls()
                server.login(settings.SMTP_USER, settings.SMTP_PASS)
                server.send_message(msg)

            logging.info(f"OTP sent to {email}")
            return True
        except Exception as e:
            logging.error(f"Failed to send OTP to {email}: {str(e)}")
            return False

    @staticmethod
    def generate_otp(email: str) -> str:
        otp = str(secrets.randbelow(10**6)).zfill(6)
        expires_at = datetime.now() + timedelta(minutes=settings.OTP_EXPIRE_MINUTES)

        otp_storage[email] = {
            "otp": otp,
            "expires_at": expires_at,
            "is_used": False
        }

        if not OTPManager.send_otp_email(email, otp):
            logging.warning(f"Fallback: OTP for {email} is {otp}")
            print(f"\nOTP for {email}: {otp}\n")

        return otp

    @staticmethod
    def verify_otp(email: str, otp: str) -> bool:
        record = otp_storage.get(email)
        return (
            record
            and record["otp"] == otp
            and not record["is_used"]
            and datetime.now() < record["expires_at"]
        )

    @staticmethod
    def mark_used(email: str):
        if email in otp_storage:
            otp_storage[email]["is_used"] = True
            logging.info(f"Marked OTP used for {email}")

    @staticmethod
    def can_request_otp(email: str) -> bool:
        last_requested = otp_request_times.get(email)
        now = datetime.now()
        if last_requested and (now - last_requested).seconds < 60:  # 1 request per minute limit
            return False
        otp_request_times[email] = now
        return True

    @staticmethod
    def cleanup_expired_otps():
        now = datetime.now()
        to_delete = [email for email, data in otp_storage.items() if data["expires_at"] < now]
        for email in to_delete:
            del otp_storage[email]
            logging.info(f"Cleaned up expired OTP for {email}")

# ---------------- Endpoints ----------------

@router.post("/forget-password/send-otp")
def send_otp(request: EmailRequest):
    email = request.email

    OTPManager.cleanup_expired_otps()

    if not OTPManager.can_request_otp(email):
        raise HTTPException(status_code=429, detail="Please wait before requesting another OTP.")

    try:
        user = UserData.objects.get(email=email)
    except UserData.DoesNotExist:
        raise HTTPException(status_code=404, detail="User not found")

    OTPManager.generate_otp(email)
    return {"message": "OTP sent to email"}

@router.post("/forget-password/resend-otp")
def resend_otp(request: EmailRequest):
    email = request.email

    OTPManager.cleanup_expired_otps()

    if not OTPManager.can_request_otp(email):
        raise HTTPException(status_code=429, detail="Please wait before requesting another OTP.")

    try:
        user = UserData.objects.get(email=email)
    except UserData.DoesNotExist:
        raise HTTPException(status_code=404, detail="User not found")

    OTPManager.generate_otp(email)
    return {"message": "OTP resent successfully"}

@router.post("/forget-password/verify-otp")
def verify_otp(request: OTPOnlyRequest):
    otp = request.otp
    OTPManager.cleanup_expired_otps()
    for email, data in otp_storage.items():
        if data["otp"] == otp:
            if datetime.now() > data["expires_at"]:
                raise HTTPException(status_code=400, detail="OTP expired")
            if data["is_used"]:
                raise HTTPException(status_code=400, detail="OTP already used")
            verified_emails[email] = True
            return {"message": "OTP verified successfully"}
    raise HTTPException(status_code=400, detail="Invalid OTP")

@router.post("/forget-password/reset-password")
def reset_password(request: PasswordResetRequest):
    # Find verified email
    email = next((e for e, verified in verified_emails.items() if verified), None)
    if not email:
        raise HTTPException(status_code=400, detail="OTP not verified yet")

    if request.new_password != request.confirm_password:
        raise HTTPException(status_code=400, detail="Passwords do not match")

    OTPManager.mark_used(email)
    verified_emails.pop(email, None)

    try:
        user = UserData.objects.get(email=email)
        user.password = make_password(request.new_password)
        user.save()
        return {"message": "Password updated successfully"}
    except UserData.DoesNotExist:
        raise HTTPException(status_code=404, detail="User not found")
"""
import smtplib
import secrets
import logging
import os
from datetime import datetime, timedelta
from email.mime.text import MIMEText
from typing import Dict

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from django.contrib.auth.hashers import make_password
from appln.models import UserData  # Django model
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()

# Logger setup
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")

router = APIRouter()

otp_storage: Dict[str, dict] = {}
verified_emails: Dict[str, bool] = {}
otp_request_times: Dict[str, datetime] = {}

# ---------------- Models ----------------
class EmailRequest(BaseModel):
    email: EmailStr

class OTPOnlyRequest(BaseModel):
    otp: str

class PasswordResetRequest(BaseModel):
    new_password: str
    confirm_password: str

# ---------------- OTP Manager ----------------
class OTPManager:
    @staticmethod
    def send_otp_email(email: str, otp: str) -> bool:
        try:
            expire_minutes = int(os.getenv("OTP_EXPIRE_MINUTES", "10"))
            msg = MIMEText(
                f"Hi,\n\nYour one-time password (OTP) is: {otp}\n\n"
                f"This code is valid for the next {expire_minutes} minutes.\n"
                f"Do not share it with anyone.\n\n- Stackly.Ai Team"
            )
            msg["Subject"] = "Your Stackly.Ai OTP Code"
            msg["From"] = os.getenv("EMAIL_FROM")
            msg["To"] = email

            smtp_host = os.getenv("SMTP_HOST")
            smtp_port = int(os.getenv("SMTP_PORT", "587"))
            smtp_user = os.getenv("SMTP_USER")
            smtp_pass = os.getenv("SMTP_PASS")

            with smtplib.SMTP(smtp_host, smtp_port) as server:
                server.starttls()
                server.login(smtp_user, smtp_pass)
                server.send_message(msg)

            logging.info(f"OTP sent to {email}")
            return True
        except Exception as e:
            logging.error(f"Failed to send OTP to {email}: {str(e)}")
            return False

    @staticmethod
    def generate_otp(email: str) -> str:
        otp = str(secrets.randbelow(10**6)).zfill(6)
        expire_minutes = int(os.getenv("OTP_EXPIRE_MINUTES", "10"))
        expires_at = datetime.now() + timedelta(minutes=expire_minutes)

        otp_storage[email] = {
            "otp": otp,
            "expires_at": expires_at,
            "is_used": False
        }

        if not OTPManager.send_otp_email(email, otp):
            logging.warning(f"Fallback: OTP for {email} is {otp}")
            print(f"\nOTP for {email}: {otp}\n")

        return otp

    @staticmethod
    def verify_otp(email: str, otp: str) -> bool:
        record = otp_storage.get(email)
        return (
            record
            and record["otp"] == otp
            and not record["is_used"]
            and datetime.now() < record["expires_at"]
        )

    @staticmethod
    def mark_used(email: str):
        if email in otp_storage:
            otp_storage[email]["is_used"] = True
            logging.info(f"Marked OTP used for {email}")

    @staticmethod
    def can_request_otp(email: str) -> bool:
        last_requested = otp_request_times.get(email)
        now = datetime.now()
        if last_requested and (now - last_requested).seconds < 60:
            return False
        otp_request_times[email] = now
        return True

    @staticmethod
    def cleanup_expired_otps():
        now = datetime.now()
        to_delete = [email for email, data in otp_storage.items() if data["expires_at"] < now]
        for email in to_delete:
            del otp_storage[email]
            logging.info(f"Cleaned up expired OTP for {email}")

# ---------------- Endpoints ----------------

@router.post("/forget-password/send-otp")
def send_otp(request: EmailRequest):
    email = request.email

    OTPManager.cleanup_expired_otps()

    if not OTPManager.can_request_otp(email):
        raise HTTPException(status_code=429, detail="Please wait before requesting another OTP.")

    try:
        UserData.objects.get(email=email)
    except UserData.DoesNotExist:
        raise HTTPException(status_code=404, detail="User not found")

    OTPManager.generate_otp(email)
    return {"message": "OTP sent to email"}

@router.post("/forget-password/resend-otp")
def resend_otp(request: EmailRequest):
    email = request.email

    OTPManager.cleanup_expired_otps()

    if not OTPManager.can_request_otp(email):
        raise HTTPException(status_code=429, detail="Please wait before requesting another OTP.")

    try:
        UserData.objects.get(email=email)
    except UserData.DoesNotExist:
        raise HTTPException(status_code=404, detail="User not found")

    OTPManager.generate_otp(email)
    return {"message": "OTP resent successfully"}

@router.post("/forget-password/verify-otp")
def verify_otp(request: OTPOnlyRequest):
    otp = request.otp
    OTPManager.cleanup_expired_otps()
    for email, data in otp_storage.items():
        if data["otp"] == otp:
            if datetime.now() > data["expires_at"]:
                raise HTTPException(status_code=400, detail="OTP expired")
            if data["is_used"]:
                raise HTTPException(status_code=400, detail="OTP already used")
            verified_emails[email] = True
            return {"message": "OTP verified successfully"}
    raise HTTPException(status_code=400, detail="Invalid OTP")

@router.post("/forget-password/reset-password")
def reset_password(request: PasswordResetRequest):
    email = next((e for e, verified in verified_emails.items() if verified), None)
    if not email:
        raise HTTPException(status_code=400, detail="OTP not verified yet")

    if request.new_password != request.confirm_password:
        raise HTTPException(status_code=400, detail="Passwords do not match")

    OTPManager.mark_used(email)
    verified_emails.pop(email, None)

    try:
        user = UserData.objects.get(email=email)
        user.password = make_password(request.new_password)
        user.save()
        return {"message": "Password updated successfully"}
    except UserData.DoesNotExist:
        raise HTTPException(status_code=404, detail="User not found")
