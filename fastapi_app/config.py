SECRET_KEY = "asdfghjkl_qwer_cvcgcvcgcvc"
ALGORITHM = "HS256"

#for forget password page

from pydantic import BaseSettings

class Settings(BaseSettings):
    # Mail Configuration
    SMTP_HOST: str
    SMTP_PORT: int
    SMTP_USER: str
    SMTP_PASS: str
    EMAIL_FROM: str

    # Twilio Configuration (corrected ✅)
    TWILIO_SID: str
    TWILIO_AUTH_TOKEN: str
    TWILIO_PHONE: str  # your Twilio test phone number

    # OTP Settings
    OTP_EXPIRE_MINUTES: int

    # Optional Debug Flag
    DEBUG: bool = False

    class Config:
        env_file = ".env"

settings = Settings()




