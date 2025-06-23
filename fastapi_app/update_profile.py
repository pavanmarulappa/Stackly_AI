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

#update_profile.py
"""from fastapi import APIRouter, Form, UploadFile, File, HTTPException
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

    return {"message": "Profile updated successfully"}"""

#Update_profile.py
from fastapi import APIRouter, Form, Query, UploadFile, File, HTTPException, Depends, FastAPI
from fastapi.responses import FileResponse, StreamingResponse, JSONResponse
from appln.models import UserData, UserSubscription, UserDesignHistory, BillingHistory
from asgiref.sync import sync_to_async
from django.contrib.auth.hashers import make_password, check_password
from typing import Optional, List
import io, os, traceback
import traceback
from pydantic import BaseModel
from fastapi_app.auth import get_current_user  # Assuming you have an auth system
from asgiref.sync import sync_to_async
from django.core.exceptions import ObjectDoesNotExist
from django.conf import settings
from PIL import Image
from fastapi.staticfiles import StaticFiles
import os

router = APIRouter()
app = FastAPI()

invoices_path = os.path.join("fastapi_app", "generated_invoices")
app.mount("/generated_invoices", StaticFiles(directory=invoices_path), name="invoices")

class BillingHistoryItem(BaseModel):
    date: str
    amount: str
    payment_method: str
    status: str
    invoice_url: Optional[str]

class BillingHistoryResponse(BaseModel):
    billing_history: List[BillingHistoryItem]
    
@sync_to_async
def get_user_by_email_db(email: str):
    """Fetches a user by their email address."""
    try:
        return UserData.objects.get(email=email)
    except ObjectDoesNotExist:
        return None
    except Exception as e:
        # It's generally better to log the full traceback here and let FastAPI handle the HTTPException later
        print(f"Error in get_user_by_email_db: {e}")
        raise # Re-raise to be caught by the main endpoint's try-except

@sync_to_async
def get_user_by_internal_id_db(user_id_int: int):
    """
    Fetches a user by their internal Django primary key (`id`).
    This expects an integer.
    """
    try:
        return UserData.objects.get(id=user_id_int)
    except ObjectDoesNotExist:
        return None
    except Exception as e:
        print(f"Error in get_user_by_internal_id_db: {e}")
        raise # Re-raise to be caught by the main endpoint's try-except

# If you still have a separate 'userid' field in your UserData for external IDs (e.g., Auth0), keep this:
@sync_to_async
def get_user_by_external_userid_db(external_userid_str: str):
    """
    Fetches a user by an external provider's user ID (e.g., Auth0 'sub').
    Assumes your UserData model has a `userid` CharField for this string.
    """
    try:
        return UserData.objects.get(userid=external_userid_str)
    except ObjectDoesNotExist:
        return None
    except Exception as e:
        print(f"Error in get_user_by_external_userid_db: {e}")
        raise # Re-raise to be caught by the main endpoint's try-except


# --- Consolidated FastAPI Endpoint ---
@router.get("/profile", tags=["Profile"])
async def get_profile(
    email: Optional[str] = Query(None, description="User's email address"),
    user_id_pk: Optional[int] = Query(
        None,
        alias="userid", # This makes /profile?userid=71 map to user_id_pk
        description="User's internal integer primary key ID (e.g., 71)"
    ),
):
    """
    Get user profile by either email or user's internal integer ID.

    Returns:
    - 200: User profile data
    - 400: Neither email nor user ID provided
    - 404: User not found
    - 500: Server error
    """
    if not email and user_id_pk is None: # Check user_id_pk for None explicitly
        raise HTTPException(
            status_code=400,
            detail="Either email or userid (integer ID) must be provided"
        )

    try:
        user = None
        if email:
            user = await get_user_by_email_db(email)
        elif user_id_pk is not None: # Call the correct function for integer PK
            user = await get_user_by_internal_id_db(user_id_pk)
        if not user:
            raise HTTPException(
                status_code=404,
                detail="User not found with the provided credentials"
            )

        profile_pic_url = None
        # Ensure user.profile_pic exists and has a .name attribute
        if user.profile_pic and hasattr(user.profile_pic, 'name') and user.profile_pic.name:
            profile_pic_url = user.profile_pic.url if user.profile_pic else None

        returned_user_id = None
        if hasattr(user, 'userid') and user.userid: # Checks for the external string 'userid' field
            returned_user_id = user.userid
        elif hasattr(user, 'id'): # Fallback to Django's integer primary key 'id'
            returned_user_id = user.id

        return {
            "userid": returned_user_id, # This will be the Auth0 ID if present, else Django PK
            "first_name": user.first_name,
            "last_name": user.last_name,
            "email": user.email,
            "phone_number": user.phone_number,
            "location": user.location,
            "provider": user.provider,
            "profile_pic": profile_pic_url
        }

    except HTTPException: # Re-raise FastAPI HTTPExceptions
        raise
    except Exception as e: # Catch any other unexpected errors
        # Log the full error for debugging on the server side
        import traceback
        traceback.print_exc()
        raise HTTPException(
            status_code=500,
            detail=f"An unexpected error occurred while fetching profile: {str(e)}"
        )
    

@router.get("/subscription", tags=["Subscription"])
async def get_user_subscription(
    user_id_pk: Optional[int] = Query(
        None,
        alias="userid",
        description="User's internal integer ID"
    )
):
    """
    Get subscription details for a user.
    """
    if user_id_pk is None:
        raise HTTPException(status_code=400, detail="userid must be provided")

    try:
        # Correctly wrapping the entire synchronous Django ORM call
        # We need to await the result of the sync_to_async call
        user = await sync_to_async(UserData.objects.filter(id=user_id_pk).first)() # Call .first() inside sync_to_async
        if not user:
            raise HTTPException(status_code=404, detail="User not found")

        # Correctly wrapping the entire synchronous Django ORM call
        subscription = await sync_to_async(UserSubscription.objects.filter(user=user).first)() # Call .first() inside sync_to_async
        if not subscription:
            raise HTTPException(status_code=404, detail="Subscription not found for this user")

        return {
            "current_plan": subscription.current_plan,
            "duration": subscription.duration,
            "original_price": float(subscription.original_price),
            "discount_price": float(subscription.discount_price) if subscription.discount_price else None,
            "total_credits": subscription.total_credits,
            "used_credits": subscription.used_credits,
            "balance_credits": subscription.balance_credits,
            "renews_on": subscription.renews_on,
            "plan_expiring_date": subscription.plan_expiring_date,
            "total_members": subscription.total_members,
            "start_date" : subscription.start_date,
            "user": {
                "name": subscription.name,
                "email": subscription.email,
                "userid": subscription.userid
            }
        }

    except Exception as e:
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=f"Unexpected error: {str(e)}")
    
    
@router.get("/billing/history", response_model=BillingHistoryResponse, tags=["Billing"])
async def get_user_billing_history(user=Depends(get_current_user)):
    try:
        # Get latest 3 billing entries
        history = await sync_to_async(
            lambda: list(BillingHistory.objects.filter(user=user).order_by('-paid_on')[:3])
        )()

        data = [
            BillingHistoryItem(
                date=entry.paid_on.strftime('%Y-%m-%d'),  # formatted date
                amount=str(entry.amount),
                payment_method=entry.payment_method,
                status=entry.status.capitalize(),
                invoice_url=f"http://localhost:8000/generated_invoices/{os.path.basename(entry.invoice)}"
                if entry.invoice else None
            )
            for entry in history
        ]

        return {"billing_history": data}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
@router.post("/update_profile")
async def update_profile(
    current_user: UserData = Depends(get_current_user),
    first_name: Optional[str] = Form(None),
    last_name: Optional[str] = Form(None),
    new_email: Optional[str] = Form(None),
    phone_number: Optional[str] = Form(None),
    current_password: Optional[str] = Form(None),
    new_password: Optional[str] = Form(None),
    confirm_password: Optional[str] = Form(None),
    profile_pic: Optional[UploadFile] = File(None)
):
    try:
        # 1. Password verification if changing sensitive info
        if new_email or new_password:
            if not current_password or not check_password(current_password, current_user.password):
                raise HTTPException(status_code=400, detail="Current password is required and must be correct")

        # 2. Update fields
        if first_name:
            current_user.first_name = first_name
        if last_name:
            current_user.last_name = last_name
        if phone_number:
            current_user.phone_number = phone_number

        # 3. Email update
        if new_email:
            existing = await sync_to_async(UserData.objects.filter(email=new_email).exclude(id=current_user.id).exists)()
            if existing:
                raise HTTPException(status_code=400, detail="Email already in use")
            current_user.email = new_email

        # 4. Password update
        if new_password and confirm_password:
            if new_password == confirm_password:
                current_user.password = make_password(new_password)
            else:
                raise HTTPException(status_code=400, detail="Passwords do not match")

        # 5. Profile picture update
        if profile_pic:
            try:
                ext = profile_pic.filename.split('.')[-1]
                filename = f"user_{current_user.id}_pic.{ext}"
                media_folder = "fastapi_app/media/profile_pics"
                os.makedirs(media_folder, exist_ok=True)
                filepath = os.path.join(media_folder, filename)

                # Delete old picture
                if current_user.profile_pic:
                    old_filepath = os.path.join("fastapi_app", current_user.profile_pic.name.lstrip("/"))
                    if os.path.exists(old_filepath):
                        os.remove(old_filepath)

                # Save new picture
                with open(filepath, "wb") as f:
                    f.write(await profile_pic.read())

                # Update DB path
                current_user.profile_pic = f"/profile_pics/{filename}"

            except Exception as e:
                traceback.print_exc()
                raise HTTPException(status_code=500, detail=f"Profile picture upload failed: {str(e)}")

        # 6. Save user
        await sync_to_async(current_user.save)()

        # 7. Update subscription name
        try:
            subscription = await sync_to_async(UserSubscription.objects.get)(user=current_user)
            updated_name = f"{current_user.first_name or ''} {current_user.last_name or ''}".strip()
            subscription.name = updated_name
            await sync_to_async(subscription.save)()
        except UserSubscription.DoesNotExist:
            pass

        return {"message": "Profile updated successfully"}

    except Exception as e:
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/download", tags=["Download"])
async def download_image(
    image_id: int,
    image_type: str = Query(..., regex="^(uploaded|generated)$", description="Type of image: uploaded or generated"),
    quality: str = Query(..., regex="^(low|good)$", description="Quality: low or good"),
    current_user: UserData = Depends(get_current_user)
):
    """
    Download uploaded/generated image in low or good quality for the current user.
    """
    try:
        # Fetch image for current user
        design = await sync_to_async(UserDesignHistory.objects.filter(id=image_id, user=current_user).first)()
        if not design:
            raise HTTPException(status_code=404, detail="Image not found for current user")

        # Determine path based on type
        if image_type == "uploaded":
            image_field = design.uploaded_image
        else:
            image_field = design.generated_image

        image_path = os.path.join("fastapi_app", image_field.name)

        if not os.path.exists(image_path):
            raise HTTPException(status_code=404, detail="Image file does not exist")

        # Good quality: return as-is
        if quality == "good":
            return FileResponse(image_path, media_type="image/jpeg", filename=os.path.basename(image_path))

        # Low quality: compress and return
        try:
            image = Image.open(image_path)
            buf = io.BytesIO()
            image.convert("RGB").save(buf, format="JPEG", quality=30)  # Force JPEG format, low quality
            buf.seek(0)

            return StreamingResponse(
                buf,
                media_type="image/jpeg",
                headers={"Content-Disposition": f"attachment; filename=low_{os.path.basename(image_path)}"}
            )
        except Exception as e:
            traceback.print_exc()
            raise HTTPException(status_code=500, detail=f"Failed to compress image: {str(e)}")

    except HTTPException:
        raise
    except Exception as e:
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=f"Unexpected error: {str(e)}")




