"""# fastapi_app/contact.py
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from fastapi_app.django_setup import django_setup
from appln.models import ContactUs
import smtplib
from email.message import EmailMessage
from fastapi_app.config import settings
from twilio.rest import Client #Msg send to user Mobile number

router = APIRouter()
django_setup()

class ContactForm(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    contact_number: str
    subject: str
    message: str

@router.post("/contact")
def submit_contact_form(data: ContactForm):
    # Save to DB
    contact = ContactUs.objects.create(
        first_name=data.first_name,
        last_name=data.last_name,
        email=data.email,
        contact_number=data.contact_number,
        subject=data.subject,
        message=data.message
    )
    
    # Send confirmation email using Mailtrap
    try:
        msg = EmailMessage()
        msg['Subject'] = "We've received your message"
        msg['From'] = "noreply@yourapp.com"
        msg['To'] = data.email
        msg.set_content(f"Hi {data.first_name},\n\nThank you for reaching out! We will get back to you soon.\n\n– Your Team")

        with smtplib.SMTP("sandbox.smtp.mailtrap.io", 587) as server:
            server.starttls()
            server.login(settings.SMTP_USER, settings.SMTP_PASS)
            server.send_message(msg)
    except Exception as e:
        raise HTTPException(status_code=500, detail="Failed to send confirmation email")

    return {"message": "Contact form submitted successfully"}
"""

"""from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr, constr, Field
from fastapi_app.django_setup import django_setup
from appln.models import ContactUs
import smtplib
from email.message import EmailMessage
from fastapi_app.config import settings
from twilio.rest import Client  # Msg send to user Mobile number

router = APIRouter()
django_setup()

class ContactForm(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    contact_number: str
    subject: str
    message: constr(max_length=500)
    source: str = Field(default="contact_us")


@router.post("/contact")
def submit_contact_form(data: ContactForm):
    # Save to DB
    contact = ContactUs.objects.create(
        first_name=data.first_name,
        last_name=data.last_name,
        email=data.email,
        contact_number=data.contact_number,
        subject=data.subject,
        message=data.message,
        source=data.source
        
    )
    
    # Send confirmation email using Mailtrap
    try:
        msg = EmailMessage()
        msg['Subject'] = "Thanks for reaching out to Stackly.Ai! "
        msg['From'] = settings.EMAIL_FROM
        msg['To'] = data.email
        msg.set_content(f"Hi {data.first_name} {data.last_name},\n\nThank you for contacting Stackly.Ai!, We've received your message and one of our team members will get back to you shortly.\n\nIf your inquiry is urgent, feel free to reply to this email or reach us at on (info@stackly.ai-123456789).\n\nWe appreciate your interest and look forward to assisting you!.\n\n-Best regards,\n\nThe Stackly.Ai Team")

        with smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT) as server:
            server.starttls()
            server.login(settings.SMTP_USER, settings.SMTP_PASS)
            server.send_message(msg)
    except Exception as e:
        raise HTTPException(status_code=500, detail="Failed to send confirmation email")
    

# Function to send SMS
    def send_sms(to_number: str, user_name: str):
        client = Client(settings.TWILIO_SID, settings.TWILIO_AUTH_TOKEN)
        message = client.messages.create(
        body=f"Hi {user_name}, Thanks for reaching out to Stackly.Ai! We will get back to you shortly. – The Stackly.Ai Team",
        from_=settings.TWILIO_PHONE,
        to= to_number,
        )
        return message.sid

# Inside the route
    # try:
    #     formatted_number = f"+91{data.contact_number}"  # Add your country code here
    #     send_sms(formatted_number, data.first_name)
    try:
        send_sms(data.contact_number, data.first_name)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))"""

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr, constr, Field
from fastapi_app.django_setup import django_setup
from appln.models import ContactUs
from email.message import EmailMessage
from twilio.rest import Client
import smtplib
import os
from dotenv import load_dotenv

# Load .env variables
load_dotenv()

router = APIRouter()
django_setup()

class ContactForm(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr
    contact_number: str
    subject: str
    message: constr(max_length=500)
    source: str = Field(default="contact_us")

@router.post("/contact")
def submit_contact_form(data: ContactForm):
    # Save to DB
    contact = ContactUs.objects.create(
        first_name=data.first_name,
        last_name=data.last_name,
        email=data.email,
        contact_number=data.contact_number,
        subject=data.subject,
        message=data.message,
        source=data.source
    )
    
    # Send confirmation email
    try:
        msg = EmailMessage()
        msg['Subject'] = "Thanks for reaching out to Stackly.Ai!"
        msg['From'] = os.getenv("EMAIL_FROM")
        msg['To'] = data.email
        msg.set_content(
            f"Hi {data.first_name} {data.last_name},\n\n"
            "Thank you for contacting Stackly.Ai! We've received your message and one of our team members will get back to you shortly.\n\n"
            "If your inquiry is urgent, feel free to reply to this email or reach us at (info@stackly.ai - 123456789).\n\n"
            "We appreciate your interest and look forward to assisting you!\n\n"
            "- Best regards,\n"
            "The Stackly.Ai Team"
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
        raise HTTPException(status_code=500, detail="Failed to send confirmation email")
    
    # Function to send SMS
    def send_sms(to_number: str, user_name: str):
        client = Client(
            os.getenv("TWILIO_SID"),
            os.getenv("TWILIO_AUTH_TOKEN")
        )
        message = client.messages.create(
            body=f"Hi {user_name}, Thanks for reaching out to Stackly.Ai! We will get back to you shortly. – The Stackly.Ai Team",
            from_=os.getenv("TWILIO_PHONE"),
            to=to_number,
        )
        return message.sid

    # Send SMS
    try:
        formatted_number = data.contact_number if data.contact_number.startswith('+') else f"+91{data.contact_number}"
        send_sms(formatted_number, data.first_name)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to send SMS: {str(e)}")

    return {"message": "Contact form submitted successfully"}


