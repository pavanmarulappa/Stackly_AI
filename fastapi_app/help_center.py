# fastapi_app/help_center.py

# from fastapi import APIRouter, HTTPException
# from pydantic import BaseModel, EmailStr, constr, Field
# from fastapi_app.django_setup import django_setup
# from appln.models import ContactUs
# import smtplib
# from email.message import EmailMessage
# # from fastapi_app.config import settings

# router = APIRouter()
# django_setup()

# class HelpCenterForm(BaseModel):
#     email: EmailStr
#     subject: constr(max_length=30)
#     message: constr(max_length=500)
#     source: str = Field(default="help_center")

# @router.post("/help-center")
# def submit_help_center_form(data: HelpCenterForm):
#     # Save to ContactUs table
#     try:
#         ContactUs.objects.create(
#             first_name="",  # No first name in help center
#             last_name="",   # No last name
#             email=data.email,
#             contact_number="",  # No phone number
#             subject=data.subject,
#             message=data.message,
#             source=data.source
#         )
#     except Exception as e:
#         raise HTTPException(status_code=500, detail="Failed to save data")

#     # Send Thank You Email
#     try:
#         msg = EmailMessage()
#         msg['Subject'] = "Thank You for Your Inquiry!"
#         msg['From'] = settings.EMAIL_FROM
#         msg['To'] = data.email
#         msg.set_content(f"Hi,\n\nThank you for reaching out to the Stackly.Ai Help Centre.\n\nWe hope we were able to resolve your query efficiently.\n\nShould you need any further assistance, please don't hesitate to get in touch.\n\n-Regards,\n-Stackly.Ai Support Team")

#         with smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT) as server:
#             server.starttls()
#             server.login(settings.SMTP_USER, settings.SMTP_PASS)
#             server.send_message(msg)
#     except Exception as e:
#         raise HTTPException(status_code=500, detail="Failed to send confirmation email")

#     return {"message": "Help Center form submitted successfully"}


from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr, constr, Field
from fastapi_app.django_setup import django_setup
from appln.models import ContactUs
import smtplib
from email.message import EmailMessage
import os
from dotenv import load_dotenv

router = APIRouter()
django_setup()

# Load environment variables from .env file
load_dotenv()

# Define the Pydantic model
class HelpCenterForm(BaseModel):
    email: EmailStr
    subject: constr(max_length=30)
    message: constr(max_length=500)
    source: str = Field(default="help_center")
    first_name: str | None = None
    last_name: str | None = None

@router.post("/help-center")
def submit_help_center_form(data: HelpCenterForm):
    # Clean up message first
    safe_message = data.message.replace("\n", " ")
    combined_message = f"Subject: {data.subject} - {safe_message}"

    if len(combined_message) > 500:
        raise HTTPException(
            status_code=400,
            detail="Combined subject and message exceed 500 characters"
        )

    # Save form data to Django model
    try:
        ContactUs.objects.create(
            first_name=data.first_name or "",
            last_name=data.last_name or "",
            email=data.email,
            contact_number="",
            message=combined_message,
            source=data.source
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to save data: {str(e)}")

    # Send thank-you email
    try:
        msg = EmailMessage()
        msg['Subject'] = "Thank You for Your Inquiry!"
        msg['From'] = os.getenv("EMAIL_FROM")
        msg['To'] = data.email
        msg.set_content(
            f"Hi {data.first_name or ''},\n\n"
            f"Thank you for reaching out to the Stackly.Ai Help Centre.\n\n"
            f"We received your message with subject: '{data.subject}'.\n\n"
            f"Message:\n{data.message}\n\n"
            f"Should you need any further assistance, please don't hesitate to get in touch.\n\n"
            f"-Regards,\nStackly.Ai Support Team"
        )

        smtp_host = os.getenv("SMTP_HOST")
        smtp_port = int(os.getenv("SMTP_PORT", "587"))
        smtp_user = os.getenv("SMTP_USER")
        smtp_pass = os.getenv("SMTP_PASS")

        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_pass)
            server.send_message(msg)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to send confirmation email: {str(e)}")

    return {"message": "Help Center form submitted successfully"}






