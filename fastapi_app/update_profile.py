"""from fastapi import APIRouter, Depends, HTTPException, File, UploadFile
from pydantic import BaseModel
from jose import jwt, JWTError
from passlib.context import CryptContext
from datetime import datetime
from appln.models import UserData
from fastapi_app.config import SECRET_KEY, ALGORITHM
from fastapi.security import OAuth2PasswordBearer
from fastapi.responses import JSONResponse
from asgiref.sync import sync_to_async
from io import BytesIO

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

class UpdateProfileModel(BaseModel):
    first_name: str = None
    last_name: str = None
    phone_number: str = None
    location: str = None
    password: str = None
    confirm_password: str = None

def hash_password(password: str):
    return pwd_context.hash(password)

def verify_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload["sub"]
    except JWTError:
        raise HTTPException(status_code=403, detail="Could not validate credentials")

@router.get("/profile")
async def get_profile(token: str = Depends(oauth2_scheme)):
    email = verify_token(token)
    user = await sync_to_async(UserData.objects.filter(email=email).first)()
    
    if user:
        return {
            "first_name": user.first_name,
            "last_name": user.last_name,
            "email": user.email,
            "phone_number": user.phone_number,
            "location": user.location,
            "profile_picture": user.profile_picture,
        }
    else:
        raise HTTPException(status_code=404, detail="User not found")

@router.put("/update_profile")
async def update_profile(
    token: str = Depends(oauth2_scheme),
    update_data: UpdateProfileModel = None,
    profile_picture: UploadFile = File(None)
):
    email = verify_token(token)
    user = await sync_to_async(UserData.objects.filter(email=email).first)()

    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    # Update fields
    if update_data:
        if update_data.first_name:
            user.first_name = update_data.first_name
        if update_data.last_name:
            user.last_name = update_data.last_name
        if update_data.phone_number:
            user.phone_number = update_data.phone_number
        if update_data.location:
            user.location = update_data.location
        if update_data.password and update_data.confirm_password:
            if update_data.password != update_data.confirm_password:
                raise HTTPException(status_code=400, detail="Passwords do not match")
            user.password = hash_password(update_data.password)

    if profile_picture:
        user.profile_picture = profile_picture.filename  # Later, save the file content if needed

    await sync_to_async(user.save)()
    return {"message": "Profile updated successfully"}
"""

#working good
"""from fastapi import APIRouter, Form, UploadFile, File, HTTPException
from fastapi.responses import JSONResponse
from appln.models import UserData
from asgiref.sync import sync_to_async
from django.contrib.auth.hashers import make_password
import os
from typing import Optional

router = APIRouter()

@router.post("/update_profile")
async def update_profile(
    email: Optional[str] = Form(None),
    userid: Optional[str] = Form(None),
    first_name: Optional[str] = Form(None),
    last_name: Optional[str] = Form(None),
    phone_number: Optional[str] = Form(None),
    location: Optional[str] = Form(None),
    new_password: str = Form(""),
    confirm_password: str = Form(""),
    profile_pic: UploadFile = File(None)
):
    # 1. Find user by email or userid
    try:
        if email:
            user = await sync_to_async(UserData.objects.get)(email=email)
        elif userid:
            user = await sync_to_async(UserData.objects.get)(userid=userid)
        else:
            raise HTTPException(status_code=400, detail="Email or User ID required")
    except UserData.DoesNotExist:
        raise HTTPException(status_code=404, detail="User not found")

    # 2. Update profile fields if provided
    if first_name:
        user.first_name = first_name
    if last_name:
        user.last_name = last_name
    if phone_number:
        user.phone_number = phone_number
    if location:
        user.location = location

    # 3. Optional password update
    if new_password and confirm_password:
        if new_password == confirm_password:
            user.password = make_password(new_password)
        else:
            return JSONResponse(status_code=400, content={"error": "Passwords do not match"})

    # 4. Optional profile picture update
    if profile_pic:
        try:
            id_part = email or userid
            filename = f"{id_part.replace('@', '_')}_pic.png"
            media_folder = "fastapi_app/media/profile_pics"
            os.makedirs(media_folder, exist_ok=True)
            filepath = os.path.join(media_folder, filename)
            with open(filepath, "wb") as f:
                f.write(await profile_pic.read())
            user.profile_pic = f"/media/profile_pics/{filename}"
        except Exception as e:
            return JSONResponse(status_code=500, content={"error": f"Profile picture upload failed: {str(e)}"})

    await sync_to_async(user.save)()
    return {"message": "Profile updated successfully"}"""


#realtime file 
"""from fastapi import APIRouter, Form, UploadFile, File, HTTPException, Depends
from fastapi.responses import JSONResponse
from fastapi.security import OAuth2PasswordBearer
from appln.models import UserData, UserSubscription
from asgiref.sync import sync_to_async
from django.contrib.auth.hashers import make_password
from typing import Optional
from jose import JWTError, jwt
import os

router = APIRouter()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

SECRET_KEY = "your_secret"
ALGORITHM = "HS256"

# Dependency to get the currently authenticated user
async def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email_or_id = payload.get("sub")
        if not email_or_id:
            raise HTTPException(status_code=401, detail="Invalid token")

        try:
            user = await sync_to_async(UserData.objects.get)(email=email_or_id)
        except UserData.DoesNotExist:
            user = await sync_to_async(UserData.objects.get)(userid=email_or_id)

        return user

    except JWTError:
        raise HTTPException(status_code=403, detail="Token decode failed")

# Profile update route
@router.post("/update_profile")
async def update_profile(
    first_name: Optional[str] = Form(None),
    last_name: Optional[str] = Form(None),
    New_email: Optional[str] = Form(None),
    phone_number: Optional[str] = Form(None),
    location: Optional[str] = Form(None),
    new_password: str = Form(""),
    confirm_password: str = Form(""),
    profile_pic: UploadFile = File(None),
    current_user: UserData = Depends(get_current_user)
):
    user = current_user

    # 1. Update profile fields if provided
    if first_name:
        user.first_name = first_name
    if last_name:
        user.last_name = last_name
    if phone_number:
        user.phone_number = phone_number
    if location:
        user.location = location

    # Update email only if it's currently empty and New_email is provided
    if New_email and (not user.email or user.email.strip() == ""):
        user.email = New_email

    # 2. Optional password update
    if new_password and confirm_password:
        if new_password == confirm_password:
            user.password = make_password(new_password)
        else:
            return JSONResponse(status_code=400, content={"error": "Passwords do not match"})

    # 3. Optional profile picture upload
    if profile_pic:
        try:
            id_part = user.email or user.userid or "user"
            filename = f"{id_part.replace('@', '_')}_pic.png"
            media_folder = "fastapi_app/media/profile_pics"
            os.makedirs(media_folder, exist_ok=True)
            filepath = os.path.join(media_folder, filename)
            with open(filepath, "wb") as f:
                f.write(await profile_pic.read())
            user.profile_pic = f"/media/profile_pics/{filename}"
        except Exception as e:
            return JSONResponse(status_code=500, content={"error": f"Profile picture upload failed: {str(e)}"})

    # 4. Save updated user
    await sync_to_async(user.save)()

    # 5. Also update name in UserSubscription
    try:
        subscription = await sync_to_async(UserSubscription.objects.get)(user=user)
        updated_name = f"{user.first_name or ''} {user.last_name or ''}".strip()
        subscription.name = updated_name
        await sync_to_async(subscription.save)()
    except UserSubscription.DoesNotExist:
        pass  # No subscription to update

    return {"message": "Profile updated successfully"}"""

#name update to user_subcriion model also

from fastapi import APIRouter, Form, UploadFile, File, HTTPException
from fastapi.responses import JSONResponse
from appln.models import UserData, UserSubscription
from asgiref.sync import sync_to_async
from django.contrib.auth.hashers import make_password
from typing import Optional
import os

router = APIRouter()

@router.post("/update_profile")
async def update_profile(
    email: Optional[str] = Form(None),
    userid: Optional[str] = Form(None),
    first_name: Optional[str] = Form(None),
    last_name: Optional[str] = Form(None),
    New_email: Optional[str] = Form(None),
    phone_number: Optional[str] = Form(None),
    location: Optional[str] = Form(None),
    new_password: str = Form(""),
    confirm_password: str = Form(""),
    profile_pic: UploadFile = File(None)
):
    # 1. Find user by email or userid
    try:
        user = None
        if email and email.strip():
            user = await sync_to_async(UserData.objects.get)(email=email.strip())
        elif userid and userid.strip():
            user = await sync_to_async(UserData.objects.get)(userid=userid.strip())
        else:
            raise HTTPException(status_code=400, detail="Email or User ID required")
    except UserData.DoesNotExist:
        raise HTTPException(status_code=404, detail="User not found")

    # 2. Update profile fields
    if first_name:
        user.first_name = first_name
    if last_name:
        user.last_name = last_name
    if phone_number:
        user.phone_number = phone_number
    if location:
        user.location = location

    if New_email and (not user.email or user.email.strip() == ""):
        user.email = New_email

    # 3. Password update
    if new_password and confirm_password:
        if new_password == confirm_password:
            user.password = make_password(new_password)
        else:
            return JSONResponse(status_code=400, content={"error": "Passwords do not match"})

    # 4. Profile picture update
    if profile_pic:
        try:
            id_part = email or userid or "user"
            filename = f"{id_part.replace('@', '_')}_pic.png"
            media_folder = "fastapi_app/media/profile_pics"
            os.makedirs(media_folder, exist_ok=True)
            filepath = os.path.join(media_folder, filename)
            with open(filepath, "wb") as f:
                f.write(await profile_pic.read())
            user.profile_pic = f"/media/profile_pics/{filename}"
        except Exception as e:
            return JSONResponse(status_code=500, content={"error": f"Profile picture upload failed: {str(e)}"})

    # 5. Save user
    await sync_to_async(user.save)()

    # 6. Update subscription name
    try:
        subscription = await sync_to_async(UserSubscription.objects.get)(user=user)
        updated_name = f"{user.first_name or ''} {user.last_name or ''}".strip()
        subscription.name = updated_name
        await sync_to_async(subscription.save)()
    except UserSubscription.DoesNotExist:
        pass

    return {"message": "Profile updated successfully"}





