import os
import shutil
import requests
import base64
import random
import time, math
import asyncio
import uuid
from fastapi import FastAPI, APIRouter, UploadFile, File, HTTPException, Form
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles
from dotenv import load_dotenv
from io import BytesIO
from PIL import Image, UnidentifiedImageError
import io
import hashlib
import aiohttp
from typing import List, Optional
from pydantic import BaseModel
from enum import Enum
from concurrent.futures import ThreadPoolExecutor
import math
from pathlib import Path
import logging
from typing import Literal
from PIL import UnidentifiedImageError, Image, ImageDraw, ImageFont
from asgiref.sync import sync_to_async
from django.db import transaction
load_dotenv()

app = FastAPI()
BASE_DIR = Path(__file__).parent.parent  # Goes up one level from fastapi_app/

# Define paths
uploads_path = BASE_DIR / "fastapi_app" / "uploads"
generated_path = BASE_DIR / "fastapi_app" / "generated"

# Create folders if they don't exist
uploads_path.mkdir(parents=True, exist_ok=True)
generated_path.mkdir(parents=True, exist_ok=True)

# Mount static files
app.mount("/static_uploads", StaticFiles(directory=uploads_path), name="static_uploads")
app.mount("/static_generated", StaticFiles(directory=generated_path), name="static_generated")


router = APIRouter()
app.include_router(router)

STABILITY_API_KEY = os.getenv("STABILITY_API_KEY")
if not STABILITY_API_KEY:
    raise RuntimeError("STABILITY_API_KEY environment variable not set")

STABILITY_API_URL = "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/image-to-image"

#https://api.stability.ai/v1/generation/esrgan-v1-x2plus/image-to-image/upscale for 4k

HEADERS = {
    "Accept": "application/json",
    "Authorization": f"Bearer {STABILITY_API_KEY}",
}
        

# Enums for frontend options
class BuildingType(str, Enum):
    COMMERCIAL = "commercial"
    RESIDENTIAL = "residential"

class RoomType(str, Enum):
    LIVING_ROOM = "living room"
    BEDROOM = "bedroom"
    KITCHEN = "kitchen"
    HOME_OFFICE = "home office"
    DINING_ROOM = "dining room"
    STUDY_ROOM = "study room"
    FAMILY_ROOM = "family room"
    KID_ROOM = "kid room"
    BALCONY = "balcony"

class DesignStyle(str, Enum):
    CLASSIC = "classic"
    MODERN = "modern"
    MINIMAL = "minimal"
    SCANDINAVIAN = "scandinavian"
    CONTEMPORARY = "contemporary"
    INDUSTRIAL = "industrial"
    JAPANDI = "japandi"
    BOHEMIAN = "bohemian"
    COASTAL = "coastal"
    MODERN_LUXURY = "modern luxury"
    TROPICAL_RESORT = "tropical resort"
    JAPANESE_ZEN = "japanese zen"

class AIStylingStrength(str, Enum):
    VERY_LOW = "very low"
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"



# Style configurations for interior
STYLE_CONFIGS = {
    "classic": {
        "prompt": "Classic {room_type} in a {building_type} with traditional furniture, ornate details, rich fabrics, elegant lighting, {style} style",
        "negative_prompt": "modern, minimalist, industrial, futuristic"
    },
    "modern": {
        "prompt": "Modern {room_type} in a {building_type} with clean lines, contemporary furniture, neutral palette, designer lighting, {style} style",
        "negative_prompt": "traditional, ornate, rustic, vintage"
    },
    "minimal": {
        "prompt": "Minimalist {room_type} in a {building_type} with clean lines, functional furniture, monochromatic palette, open space, {style} style",
        "negative_prompt": "cluttered, ornate, traditional, heavy"
    },
    "scandinavian": {
        "prompt": "Scandinavian {room_type} in a {building_type} with light wood, clean lines, functional furniture, natural light, hygge aesthetic, {style} style",
        "negative_prompt": "ornate, dark, heavy, cluttered"
    },
    "contemporary": {
        "prompt": "Contemporary {room_type} in a {building_type} with clean lines, mixed materials, neutral colors, designer lighting, {style} style",
        "negative_prompt": "traditional, rustic, vintage, ornate"
    },
    "industrial": {
        "prompt": "Industrial {room_type} in a {building_type} with exposed brick, metal accents, open space, modern lighting, urban style, {style} style",
        "negative_prompt": "traditional, floral, rustic, country"
    },
    "japandi": {
        "prompt": "Japandi {room_type} in a {building_type} with minimal decor, natural materials, neutral colors, zen atmosphere, {style} style",
        "negative_prompt": "cluttered, ornate, bright colors, western"
    },
    "bohemian": {
        "prompt": "Bohemian {room_type} in a {building_type} with eclectic mix of patterns, textures, plants, warm lighting, {style} style",
        "negative_prompt": "minimalist, sterile, modern"
    },
    "coastal": {
        "prompt": "Coastal {room_type} in a {building_type} with light colors, natural textures, nautical elements, airy atmosphere, {style} style",
        "negative_prompt": "dark, heavy, urban, industrial"
    },
    "modern luxury": {
        "prompt": "Luxury modern {room_type} in a {building_type} with designer furniture, premium materials, elegant lighting, 8K professional interior, {style} style",
        "negative_prompt": "cheap, cluttered, outdated, poor lighting"
    },
    "tropical resort": {
        "prompt": "Tropical {room_type} in a {building_type} with canopy bed, natural materials, lush greenery, resort-style luxury, {style} style",
        "negative_prompt": "urban, industrial, minimalist"
    },
    "japanese zen": {
        "prompt": "Japanese zen {room_type} in a {building_type} with tatami mats, shoji screens, minimal decor, peaceful atmosphere, {style} style",
        "negative_prompt": "western, cluttered, bright colors"
    }
}


# Optimized strength configuration
STRENGTH_CONFIG = {
    "very low": {"image_strength": 0.4, "steps": 20, "cfg_scale": 6},
    "low": {"image_strength": 0.3, "steps": 25, "cfg_scale": 7},
    "medium": {"image_strength": 0.2, "steps": 30, "cfg_scale": 8},
    "high": {"image_strength": 0.1, "steps": 35, "cfg_scale": 9}
}

ALLOWED_DIMENSIONS = [
    (1024, 1024), (1152, 896), (1216, 832), (1344, 768),
    (1536, 640), (640, 1536), (768, 1344), (832, 1216), (896, 1152)
]

executor = ThreadPoolExecutor(max_workers=8)

def add_watermark_to_image(image_path: str, watermark_text="Stackly.AI") -> None:
    """Add bottom-right watermark and a neatly centered horizontal watermark using same font size."""
    with Image.open(image_path).convert("RGBA") as base:
        width, height = base.size

        # Create transparent watermark layer
        watermark = Image.new("RGBA", base.size, (255, 255, 255, 0))
        draw = ImageDraw.Draw(watermark)

        # Shared font setup
        font_size = max(15, width // 40)
        try:
            font = ImageFont.truetype("arial.ttf", font_size)
        except IOError:
            font = ImageFont.load_default()

        # --- Bottom-right watermark ---
        bbox = draw.textbbox((0, 0), watermark_text, font=font)
        textwidth = bbox[2] - bbox[0]
        textheight = bbox[3] - bbox[1]
        x1 = width - textwidth - 10
        y1 = height - textheight - 20

        draw.text((x1 + 1, y1 + 1), watermark_text, fill=(0, 0, 0, 120), font=font)  # Shadow
        draw.text((x1, y1), watermark_text, fill=(255, 255, 255, 200), font=font)    # Main

        # --- Center repeated watermark ---
        space_width = draw.textlength(" ", font=font)
        word_width = draw.textlength(watermark_text, font=font)
        total_word_width = word_width + space_width

        repeat_count = math.ceil(width / total_word_width) + 2  # Ensure overflow to clip evenly
        repeated_text = (watermark_text + " ") * repeat_count

        center_y = (height - textheight) // 2

        draw.text((2, center_y + 2), repeated_text, fill=(0, 0, 0, 120), font=font)   # Shadow
        draw.text((0, center_y), repeated_text, fill=(255, 255, 255, 160), font=font)  # Main

        # Merge layers and save
        final = Image.alpha_composite(base, watermark)
        final.convert("RGB").save(image_path, "PNG")

async def resize_to_allowed_dimensions(image_path: str):
    try:
        with Image.open(image_path) as img:
            img = img.convert("RGB")  # Fix image mode issues
            original_width, original_height = img.size
            original_aspect = original_width / original_height

            # Find best match from allowed dimensions based on aspect ratio difference
            closest_dim = min(
                ALLOWED_DIMENSIONS,
                key=lambda dim: abs((dim[0] / dim[1]) - original_aspect)
            )
            resized_img = img.resize(closest_dim, Image.LANCZOS)
            img_bytes = io.BytesIO()
            resized_img.save(img_bytes, format="PNG", optimize=True, quality=90)
            return img_bytes.getvalue(), closest_dim
    except UnidentifiedImageError:
        raise HTTPException(400, detail="Invalid or unsupported image format.")
    except Exception as e:
        import traceback
        traceback.print_exc()
        raise HTTPException(500, detail=f"Internal error: {str(e)}")

async def generate_design_variation(
    image_bytes: bytes,
    design_config: dict,
    strength_level: str
):
    """Optimized design generation with timeout"""
    async def _generate():
        try:
            params = STRENGTH_CONFIG[strength_level]
            style_config = STYLE_CONFIGS[design_config["style"]]
            
            prompt = style_config["prompt"].format(
                room_type=design_config["room_type"],
                building_type=design_config["building_type"],
                style=design_config["style"]
            )
            
            modifiers = ["professional design", "high quality", "detailed"]
            prompt += ", " + random.choice(modifiers)
            
            files = {
                "init_image": ("input.png", BytesIO(image_bytes), "image/png"),
            }
            
            data = {
                "init_image_mode": "IMAGE_STRENGTH",
                "image_strength": str(params["image_strength"]),
                "text_prompts[0][text]": prompt,
                "text_prompts[0][weight]": "1.2",
                "text_prompts[1][text]": style_config["negative_prompt"],
                "text_prompts[1][weight]": "-1.0",
                "cfg_scale": str(params["cfg_scale"]),
                "samples": "1",
                "steps": str(params["steps"]),
                "seed": str(random.randint(0, 100000)),
                "style_preset": "photographic"
            }

            try:
                response = await asyncio.wait_for(
                    asyncio.get_event_loop().run_in_executor(
                        None,
                        lambda: requests.post(
                            STABILITY_API_URL,
                            headers=HEADERS,
                            files=files,
                            data=data,
                            timeout=45
                        )
                    ),
                    timeout=60
                )
            except asyncio.TimeoutError:
                raise HTTPException(504, "API request timed out")

            if response.status_code != 200:
                raise HTTPException(502, f"API Error: {response.status_code}")

            result = response.json()
            return result["artifacts"][0]
            
        except Exception as e:
            raise HTTPException(500, f"Generation error: {str(e)}")

    return await _generate()



@router.post("/generate-interior-design/")
async def generate_design(
    user_id: str = Form(...),
    image: UploadFile = File(...),
    building_type: str = Form(...),
    room_type: str = Form(...),
    design_style: str = Form(...),
    ai_strength: str = Form("medium"),
    num_designs: int = Form(1, ge=1, le=6)
):
    try:
        from django.utils import timezone
        from datetime import date
        from appln.models import UserData, UserSubscription, UserDesignHistory, CreditUsage

        uploads_path.mkdir(parents=True, exist_ok=True)
        generated_path.mkdir(parents=True, exist_ok=True)

        # Step 1: User & Subscription
        try:
            user = await sync_to_async(UserData.objects.get)(id=user_id)
            subscription = await sync_to_async(UserSubscription.objects.filter(user=user).first)()
            if not subscription:
                raise HTTPException(status_code=404, detail="Subscription not found")
        except UserData.DoesNotExist:
            raise HTTPException(status_code=404, detail="User not found")

        # Step 2: Credit Check
        remaining_credits = subscription.total_credits - subscription.used_credits
        if remaining_credits < num_designs:
            raise HTTPException(
                status_code=402,
                detail={
                    "message": "Not enough credits",
                    "available": remaining_credits,
                    "required": num_designs
        }
        )
        # Step 3: Process Original Image
        try:
            file_ext = os.path.splitext(image.filename)[1].lower()
            if file_ext not in ['.jpg', '.jpeg', '.png']:
                raise HTTPException(status_code=400, detail="Only JPG, JPEG, and PNG files are allowed")

            original_filename = f"original_{uuid.uuid4().hex}{file_ext}"
            original_path = uploads_path / original_filename
            await sync_to_async(lambda: shutil.copyfileobj(image.file, open(original_path, "wb")))()

            image_bytes, _ = await resize_to_allowed_dimensions(str(original_path))
        except Exception as e:
            if 'original_path' in locals() and original_path.exists():
                await sync_to_async(os.remove)(original_path)
            raise HTTPException(status_code=400, detail=f"Image processing failed: {str(e)}")

        # Step 4: Generate Designs
        try:
            design_config = {
                "style": design_style.lower(),
                "room_type": room_type.lower(),
                "building_type": building_type.lower(),
            }

            tasks = [
                generate_design_variation(image_bytes, design_config, ai_strength.lower())
                for _ in range(num_designs)
            ]
            results = await asyncio.gather(*tasks)
        except Exception as e:
            if original_path.exists():
                await sync_to_async(os.remove)(original_path)
            raise HTTPException(status_code=500, detail=f"Design generation failed: {str(e)}")

        # Step 5: Save Generated Images (file system only, not DB yet)
        generated_filenames = []
        try:
            for result in results:
                filename = f"generated_{uuid.uuid4().hex}.png"
                filepath = generated_path / filename
                await sync_to_async(lambda: open(filepath, "wb").write(base64.b64decode(result["base64"])))()
                #Water mark for basic user
                if subscription.current_plan == "basic":
                    await sync_to_async(add_watermark_to_image)(str(filepath))
                generated_filenames.append(filename)
        except Exception as e:
            for fname in generated_filenames:
                await sync_to_async(os.remove)(generated_path / fname)
            if original_path.exists():
                await sync_to_async(os.remove)(original_path)
            raise HTTPException(status_code=500, detail=f"Image saving failed: {str(e)}")

        # Step 6: Safe DB Update Using transaction.atomic()
        try:
            @sync_to_async
            def save_db_changes():
                with transaction.atomic():
                    # Step 1: Delete old entries if user already has 30 or more
                    existing_entries = UserDesignHistory.objects.filter(user=user).order_by('created_at')
                    excess = existing_entries.count() + len(generated_filenames) - 10

                    if excess > 0:
                        for old_entry in existing_entries[:excess]:
                            # Correct paths based on your project folder structure
                            old_uploaded_path = BASE_DIR / "fastapi_app" / "uploads" / os.path.basename(old_entry.uploaded_image.name)
                            old_generated_path = BASE_DIR / "fastapi_app" / "generated" / os.path.basename(old_entry.generated_image.name)

                            if old_uploaded_path.exists():
                                os.remove(old_uploaded_path)
                            if old_generated_path.exists():
                                os.remove(old_generated_path)

                            old_entry.delete()

                    # Step 2: Add new generated records
                    for filename in generated_filenames:
                        UserDesignHistory.objects.create(
                            user=user,
                            uploaded_image=f"uploads/{original_filename}",
                            generated_image=f"generated/{filename}"
                        )

                    subscription.used_credits += num_designs
                    subscription.total_credits_used_all_time += num_designs
                    subscription.save()

                    today = date.today()
                    credit_entry, created = CreditUsage.objects.get_or_create(
                        user=user,
                        date=today,
                        defaults={"credits_used": num_designs}
                    )
                    if not created:
                        credit_entry.credits_used += num_designs
                        credit_entry.save()

            await save_db_changes()

        except Exception as e:
            # Rollback image files if DB save failed
            for fname in generated_filenames:
                await sync_to_async(os.remove)(generated_path / fname)
            if original_path.exists():
                await sync_to_async(os.remove)(original_path)
            raise HTTPException(status_code=500, detail=f"Database update failed: {str(e)}")

        # Step 7: Success Response
        return {
            "success": True,
            "original_image": f"/static_uploads/{original_filename}",
            "designs": [f"/static_generated/{f}" for f in generated_filenames],
            "credits": {
                "remaining": subscription.balance_credits,
                "used": subscription.used_credits,
                "total": subscription.total_credits
            },
            "message": "Designs generated successfully"
        }

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Unexpected error: {str(e)}")
    
@router.post("/generate/more-designs")
async def generate_more_designs(
    user_id: str = Form(...),
    category: str = Form(...),
    type_detail: str = Form(...),
    style: str = Form(...),
    ai_strength: str = Form(...),
    uploaded_image: UploadFile = File(...)
):
    try:
        from django.utils import timezone
        from datetime import date
        from appln.models import UserData, UserSubscription, UserDesignHistory, CreditUsage

        if category not in {"interiors", "exteriors", "outdoors"}:
            raise HTTPException(status_code=400, detail="Invalid category. Must be 'interiors', 'exteriors', or 'outdoors'")

        if ai_strength.lower() not in STRENGTH_CONFIG:
            raise HTTPException(status_code=400, detail="Invalid AI strength level")

        num_images = 2

        uploads_path.mkdir(parents=True, exist_ok=True)
        generated_path.mkdir(parents=True, exist_ok=True)

        try:
            user = await sync_to_async(UserData.objects.get)(id=user_id)
            subscription = await sync_to_async(UserSubscription.objects.filter(user=user).first)()
            if not subscription:
                raise HTTPException(status_code=404, detail="Subscription not found")
        except UserData.DoesNotExist:
            raise HTTPException(status_code=404, detail="User not found")

        remaining_credits = subscription.total_credits - subscription.used_credits
        if remaining_credits < num_images:
            raise HTTPException(
                status_code=402,
                detail={
                    "message": "Not enough credits",
                    "available": remaining_credits,
                    "required": num_images
                }
            )

        file_ext = os.path.splitext(uploaded_image.filename)[1].lower()
        if file_ext not in ['.jpg', '.jpeg', '.png']:
            raise HTTPException(status_code=400, detail="Only JPG and PNG images are allowed")

        original_filename = f"more_{uuid.uuid4().hex}{file_ext}"
        original_path = uploads_path / original_filename

        try:
            with open(original_path, "wb") as f:
                shutil.copyfileobj(uploaded_image.file, f)

            image_bytes, _ = await resize_to_allowed_dimensions(str(original_path))

            if category == "interiors":
                if style not in STYLE_CONFIGS:
                    raise HTTPException(status_code=400, detail="Invalid style for interior design")

                config = STYLE_CONFIGS[style]
                prompt = config["prompt"].format(
                    room_type=type_detail,
                    building_type="residential",
                    style=style
                )
                negative_prompt = config["negative_prompt"]
            elif category == "exteriors":
                prompt = f"{style} style house {type_detail} view, modern architecture, HD rendering"
                negative_prompt = "low quality, blurry, sketch, painting"
            else:
                prompt = f"{style} style {type_detail}, professional landscape design, natural elements, clean look"
                negative_prompt = "cluttered, dark, blurry, low quality"

            params = STRENGTH_CONFIG[ai_strength.lower()]

            generated_filenames = []
            for _ in range(num_images):
                files = {
                    "init_image": ("input.png", BytesIO(image_bytes), "image/png"),
                }
                data = {
                    "init_image_mode": "IMAGE_STRENGTH",
                    "image_strength": str(params["image_strength"]),
                    "text_prompts[0][text]": prompt,
                    "text_prompts[0][weight]": "1.2",
                    "text_prompts[1][text]": negative_prompt,
                    "text_prompts[1][weight]": "-1.0",
                    "cfg_scale": str(params["cfg_scale"]),
                    "samples": "1",
                    "steps": str(params["steps"]),
                    "seed": str(random.randint(0, 100000)),
                    "style_preset": "photographic"
                }

                response = requests.post(
                    STABILITY_API_URL,
                    headers=HEADERS,
                    files=files,
                    data=data,
                    timeout=45
                )
                response.raise_for_status()

                result = response.json()
                artifact = result["artifacts"][0]
                filename = f"more_{uuid.uuid4().hex}.png"
                out_path = generated_path / filename

                with open(out_path, "wb") as f:
                    f.write(base64.b64decode(artifact["base64"]))
                    
                # ✅ Watermark only for basic users
                if subscription.current_plan == "basic":
                    add_watermark_to_image(str(out_path))

                generated_filenames.append(filename)

            @sync_to_async
            def save_to_db():
                with transaction.atomic():
                    existing_entries = UserDesignHistory.objects.filter(user=user).order_by('created_at')
                    excess = existing_entries.count() + len(generated_filenames) - 10
                    if excess > 0:
                        for old_entry in existing_entries[:excess]:
                            old_uploaded_path = BASE_DIR / "fastapi_app" / "uploads" / os.path.basename(old_entry.uploaded_image.name)
                            old_generated_path = BASE_DIR / "fastapi_app" / "generated" / os.path.basename(old_entry.generated_image.name)

                            if old_uploaded_path.exists():
                                os.remove(old_uploaded_path)
                            if old_generated_path.exists():
                                os.remove(old_generated_path)
                            old_entry.delete()

                    for fname in generated_filenames:
                        UserDesignHistory.objects.create(
                            user=user,
                            uploaded_image=f"uploads/{original_filename}",
                            generated_image=f"generated/{fname}"
                        )

                    subscription.used_credits += num_images
                    subscription.total_credits_used_all_time += num_images
                    subscription.save()

                    today = date.today()
                    credit_entry, created = CreditUsage.objects.get_or_create(
                        user=user,
                        date=today,
                        defaults={"credits_used": num_images}
                    )
                    if not created:
                        credit_entry.credits_used += num_images
                        credit_entry.save()

            await save_to_db()

            return {
                "success": True,
                "designs": [f"/static_generated/{f}" for f in generated_filenames],
                "credits": {
                    "remaining": subscription.balance_credits,
                    "used": subscription.used_credits,
                    "total": subscription.total_credits
                },
                "message": f"Successfully generated {num_images} additional designs"
            }

        finally:
            if original_path.exists():
                original_path.unlink()

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Unexpected error generating more designs: {str(e)}"
        )
        
#updated db interior
"""@router.post("/generate-interior-design/")
async def generate_design(
    user_id: str = Form(...),
    image: UploadFile = File(...),
    building_type: str = Form(...),
    room_type: str = Form(...),
    design_style: str = Form(...),
    ai_strength: str = Form("medium"),
    num_designs: int = Form(1, ge=1, le=6)
):
    try:
        from django.utils import timezone
        from datetime import date
        from appln.models import UserData, UserSubscription, UserDesignHistory, CreditUsage

        uploads_path.mkdir(parents=True, exist_ok=True)
        generated_path.mkdir(parents=True, exist_ok=True)

        # Step 1: User & Subscription
        try:
            user = await sync_to_async(UserData.objects.get)(id=user_id)
            subscription = await sync_to_async(UserSubscription.objects.filter(user=user).first)()
            if not subscription:
                raise HTTPException(status_code=404, detail="Subscription not found")
        except UserData.DoesNotExist:
            raise HTTPException(status_code=404, detail="User not found")

        # Step 2: Credit Check
        remaining_credits = subscription.total_credits - subscription.used_credits
        if remaining_credits < num_designs:
            raise HTTPException(
                status_code=402,
                detail={
                    "message": "Not enough credits",
                    "available": remaining_credits,
                    "required": num_designs
        }
        )
        # Step 3: Process Original Image
        try:
            file_ext = os.path.splitext(image.filename)[1].lower()
            if file_ext not in ['.jpg', '.jpeg', '.png']:
                raise HTTPException(status_code=400, detail="Only JPG, JPEG, and PNG files are allowed")

            original_filename = f"original_{uuid.uuid4().hex}{file_ext}"
            original_path = uploads_path / original_filename
            await sync_to_async(lambda: shutil.copyfileobj(image.file, open(original_path, "wb")))()

            image_bytes, _ = await resize_to_allowed_dimensions(str(original_path))
        except Exception as e:
            if 'original_path' in locals() and original_path.exists():
                await sync_to_async(os.remove)(original_path)
            raise HTTPException(status_code=400, detail=f"Image processing failed: {str(e)}")

        # Step 4: Generate Designs
        try:
            design_config = {
                "style": design_style.lower(),
                "room_type": room_type.lower(),
                "building_type": building_type.lower(),
            }

            tasks = [
                generate_design_variation(image_bytes, design_config, ai_strength.lower())
                for _ in range(num_designs)
            ]
            results = await asyncio.gather(*tasks)
        except Exception as e:
            if original_path.exists():
                await sync_to_async(os.remove)(original_path)
            raise HTTPException(status_code=500, detail=f"Design generation failed: {str(e)}")

        # Step 5: Save Generated Images (file system only, not DB yet)
        generated_filenames = []
        try:
            for result in results:
                filename = f"generated_{uuid.uuid4().hex}.png"
                filepath = generated_path / filename
                await sync_to_async(lambda: open(filepath, "wb").write(base64.b64decode(result["base64"])))()
                generated_filenames.append(filename)
        except Exception as e:
            for fname in generated_filenames:
                await sync_to_async(os.remove)(generated_path / fname)
            if original_path.exists():
                await sync_to_async(os.remove)(original_path)
            raise HTTPException(status_code=500, detail=f"Image saving failed: {str(e)}")

        # Step 6: Safe DB Update Using transaction.atomic()
        try:
            @sync_to_async
            def save_db_changes():
                with transaction.atomic():
                    for filename in generated_filenames:
                        UserDesignHistory.objects.create(
                            user=user,
                            uploaded_image=f"uploads/{original_filename}",
                            generated_image=f"generated/{filename}"
                        )

                    subscription.used_credits += num_designs
                    subscription.total_credits_used_all_time += num_designs
                    subscription.save()

                    today = date.today()
                    credit_entry, created = CreditUsage.objects.get_or_create(
                        user=user,
                        date=today,
                        defaults={"credits_used": num_designs}
                    )
                    if not created:
                        credit_entry.credits_used += num_designs
                        credit_entry.save()

            await save_db_changes()

        except Exception as e:
            # Rollback image files if DB save failed
            for fname in generated_filenames:
                await sync_to_async(os.remove)(generated_path / fname)
            if original_path.exists():
                await sync_to_async(os.remove)(original_path)
            raise HTTPException(status_code=500, detail=f"Database update failed: {str(e)}")

        # Step 7: Success Response
        return {
            "success": True,
            "original_image": f"/static_uploads/{original_filename}",
            "designs": [f"/static_generated/{f}" for f in generated_filenames],
            "credits": {
                "remaining": subscription.balance_credits,
                "used": subscription.used_credits,
                "total": subscription.total_credits
            },
            "message": "Designs generated successfully"
        }

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Unexpected error: {str(e)}")"""
    
"""@router.post("/generate-interior-design/")
async def generate_design(
    image: UploadFile = File(...),
    building_type: str = Form(...),
    room_type: str = Form(...),
    design_style: str = Form(...),
    ai_strength: str = Form("medium"),
    num_designs: int = Form(1, ge=1, le=6)
):
    try:
        # Use the same paths defined globally
        from pathlib import Path

        BASE_DIR = Path(__file__).parent.parent
        uploads_dir = BASE_DIR / "fastapi_app" / "uploads"
        generated_dir = BASE_DIR / "fastapi_app" / "generated"

        # Save original file
        file_ext = os.path.splitext(image.filename)[1]
        original_filename = f"original_{uuid.uuid4().hex}{file_ext}"
        original_path = uploads_dir / original_filename

        with open(original_path, "wb") as f:
            shutil.copyfileobj(image.file, f)

        # Resize/process image
        image_bytes, _ = await resize_to_allowed_dimensions(str(original_path))

        design_config = {
            "style": design_style,
            "room_type": room_type,
            "building_type": building_type
        }

        tasks = [
            generate_design_variation(
                image_bytes,
                design_config,
                ai_strength
            ) for _ in range(num_designs)
        ]

        results = await asyncio.gather(*tasks)

        # Save results
        generated_urls = []
        for result in results:
            filename = f"generated_{uuid.uuid4().hex}.png"
            filepath = generated_dir / filename
            with open(filepath, "wb") as f:
                f.write(base64.b64decode(result["base64"]))
            generated_urls.append(f"/static_generated/{filename}")
            print("Generated Path:", generated_path)


        return {
            
            "success": True,
            "original_image": f"/static_uploads/{original_filename}",
            "designs": generated_urls,
            "message": "Designs generated successfully"
            
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {str(e)}")"""
    

"""@router.post("/generate/more-designs")
async def generate_more_designs(
    category: str = Form(...),
    type_detail: str = Form(...),
    style: str = Form(...),
    ai_strength: str = Form(...),
    uploaded_image: UploadFile = File(...)
):
    try:
        # Validate inputs
        if category not in {"interiors", "exteriors", "outdoors"}:
            raise HTTPException(status_code=400, detail="Invalid category. Must be 'interiors', 'exteriors', or 'outdoors'")
        
        if ai_strength.lower() not in STRENGTH_CONFIG:
            raise HTTPException(status_code=400, detail="Invalid AI strength level")

        num_images = 2  # Always generate 2 more images
        
        # Save uploaded image
        file_ext = os.path.splitext(uploaded_image.filename)[1].lower()
        if file_ext not in ['.jpg', '.jpeg', '.png']:
            raise HTTPException(status_code=400, detail="Only JPG and PNG images are allowed")

        original_filename = f"more_{uuid.uuid4().hex}{file_ext}"
        original_path = uploads_path / original_filename

        try:
            with open(original_path, "wb") as f:
                shutil.copyfileobj(uploaded_image.file, f)

            # Resize/process image
            image_bytes, _ = await resize_to_allowed_dimensions(str(original_path))

            # Select appropriate configuration based on category
            if category == "interior":
                if style not in STYLE_CONFIGS:
                    raise HTTPException(status_code=400, detail="Invalid style for interior design")
                
                config = STYLE_CONFIGS[style]
                prompt = config["prompt"].format(
                    room_type=type_detail,
                    building_type="residential",  # Default, can be made configurable
                    style=style
                )
                negative_prompt = config["negative_prompt"]
            elif category == "exterior":
                prompt = f"{style} style house {type_detail} view, modern architecture, HD rendering"
                negative_prompt = "low quality, blurry, sketch, painting"
            else:  # outdoor
                prompt = f"{style} style {type_detail}, professional landscape design, natural elements, clean look"
                negative_prompt = "cluttered, dark, blurry, low quality"

            # Get strength parameters
            params = STRENGTH_CONFIG[ai_strength.lower()]

            # Generate images
            generated_urls = []
            for _ in range(num_images):
                files = {
                    "init_image": ("input.png", BytesIO(image_bytes), "image/png"),
                }
                data = {
                    "init_image_mode": "IMAGE_STRENGTH",
                    "image_strength": str(params["image_strength"]),
                    "text_prompts[0][text]": prompt,
                    "text_prompts[0][weight]": "1.2",
                    "text_prompts[1][text]": negative_prompt,
                    "text_prompts[1][weight]": "-1.0",
                    "cfg_scale": str(params["cfg_scale"]),
                    "samples": "1",
                    "steps": str(params["steps"]),
                    "seed": str(random.randint(0, 100000)),
                    "style_preset": "photographic"
                }

                try:
                    response = requests.post(
                        STABILITY_API_URL,
                        headers=HEADERS,
                        files=files,
                        data=data,
                        timeout=45
                    )
                    response.raise_for_status()
                except requests.exceptions.RequestException as e:
                    raise HTTPException(
                        status_code=502,
                        detail=f"Image generation API request failed: {str(e)}"
                    )

                result = response.json()
                if not result.get("artifacts"):
                    raise HTTPException(
                        status_code=502,
                        detail="No artifacts returned from generation API"
                    )

                artifact = result["artifacts"][0]
                filename = f"more_{uuid.uuid4().hex}.png"
                out_path = generated_path / filename

                with open(out_path, "wb") as f:
                    f.write(base64.b64decode(artifact["base64"]))

                generated_urls.append(f"/static_generated/{filename}")

            return {
                "success": True,
                "designs": generated_urls,
                "message": f"Successfully generated {num_images} additional designs"
            }

        finally:
            # Clean up the uploaded file
            if original_path.exists():
                original_path.unlink()

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Unexpected error generating more designs: {str(e)}"
        )"""
    
    
# 1) House Angle: only Front, Back
#exterior 
class HouseAngle(str, Enum):
    FRONT = "front side"
    BACK = "back side"
    LEFT = "left side"
    RIGHT = "right side"

class ExteriorDesignStyle(str, Enum):
    CLASSIC = "classic"
    MODERN = "modern"
    BOHEMIAN = "bohemian"
    COASTAL = "coastal"
    INTERNATIONAL = "international"
    ELEPHANT = "elephant"
    STONE_CLAD = "stone clad"
    GLASS_HOUSE = "glass house"
    RED_BRICK = "red brick"
    PAINTED_BRICK = "painted brick"
    WOOD_ACCENTS = "wood accents"
    INDUSTRIAL = "industrial"

EXTERIOR_STYLE_CONFIGS = {
    "classic": {
        "prompt": "Classic {angle} view of house with symmetrical design, columns, traditional details, professional architectural rendering, ultra-detailed, 8K",
        "negative_prompt": "modern, futuristic, industrial, asymmetrical, blurry, low quality, cropped"
    },
    "modern": {
        "prompt": "Modern {angle} view of house with clean lines, large windows, minimalist design, professional architectural rendering, ultra-detailed, 8K",
        "negative_prompt": "traditional, ornate, rustic, vintage, blurry, low quality, cropped"
    },
    "bohemian": {
        "prompt": "Bohemian {angle} view of house with eclectic design, colorful elements, mixed patterns, professional architectural rendering, ultra-detailed, 8K",
        "negative_prompt": "minimalist, sterile, uniform, blurry, low quality, cropped"
    },
    "coastal": {
        "prompt": "Coastal {angle} view of house with light colors, beachy vibe, large windows, professional architectural rendering, ultra-detailed, 8K",
        "negative_prompt": "dark, heavy, urban, industrial, blurry, low quality, cropped"
    },
    "international": {
        "prompt": "International style {angle} view of house with geometric forms, flat roofs, open interior spaces, professional architectural rendering, ultra-detailed, 8K",
        "negative_prompt": "traditional, ornate, rustic, blurry, low quality, cropped"
    },
    "elephant": {
        "prompt": "Luxury {angle} view of large modern house with expansive glass, clean lines, premium materials, professional architectural rendering, ultra-detailed, 8K",
        "negative_prompt": "small, cramped, cheap materials, blurry, low quality, cropped"
    },
    "stone clad": {
        "prompt": "Stone-clad {angle} view of house with natural stone exterior, rustic yet modern design, professional architectural rendering, ultra-detailed, 8K",
        "negative_prompt": "smooth, plain, industrial, blurry, low quality, cropped"
    },
    "glass house": {
        "prompt": "Glass house {angle} view with extensive glass walls, modern design, connection to nature, professional architectural rendering, ultra-detailed, 8K",
        "negative_prompt": "opaque, traditional, small windows, blurry, low quality, cropped"
    },
    "red brick": {
        "prompt": "Red brick {angle} view of house with traditional brick exterior, classic design, professional architectural rendering, ultra-detailed, 8K",
        "negative_prompt": "modern, smooth, industrial, blurry, low quality, cropped"
    },
    "painted brick": {
        "prompt": "Painted brick {angle} view of house with colorful brick exterior, modern twist on traditional, professional architectural rendering, ultra-detailed, 8K",
        "negative_prompt": "unpainted, industrial, plain, blurry, low quality, cropped"
    },
    "wood accents": {
        "prompt": "{angle} view of house with natural wood accents, warm modern design, professional architectural rendering, ultra-detailed, 8K",
        "negative_prompt": "cold, industrial, no wood, blurry, low quality, cropped"
    },
    "industrial": {
        "prompt": "Industrial {angle} view of house with exposed materials, metal accents, urban style, professional architectural rendering, ultra-detailed, 8K",
        "negative_prompt": "traditional, rustic, ornate, blurry, low quality, cropped"
    }
}

EXTERIOR_STRENGTH_CONFIG = {
    "very low": {"image_strength": 0.40, "steps": 35, "cfg_scale": 4},
    "low": {"image_strength": 0.35, "steps": 40, "cfg_scale": 5},
    "medium": {"image_strength": 0.30, "steps": 45, "cfg_scale": 6},
    "high": {"image_strength": 0.25, "steps": 50, "cfg_scale": 7}
}

"""EXTERIOR_STRENGTH_CONFIGS = {
    "very low": {"image_strength": 0.08, "steps": 20, "cfg_scale": 4},
    "low": {"image_strength": 0.10, "steps": 25, "cfg_scale": 5},
    "medium": {"image_strength": 0.13, "steps": 28, "cfg_scale": 6},
    "high": {"image_strength": 0.16, "steps": 30, "cfg_scale": 7}
}"""


async def generate_exterior_design_variation(
    image_bytes: bytes,
    design_config: dict,
    strength_level: str
):
    """Generate exterior design variation with proper aiohttp file upload"""
    try:
        # Validate strength level
        if strength_level.lower() not in EXTERIOR_STRENGTH_CONFIG:
            raise ValueError(f"Invalid strength level: {strength_level}")

        params = EXTERIOR_STRENGTH_CONFIG[strength_level.lower()]
        
        # Validate design style
        style = design_config["style"].lower()
        if style not in EXTERIOR_STYLE_CONFIGS:
            raise ValueError(f"Invalid design style: {style}")

        style_config = EXTERIOR_STYLE_CONFIGS[style]
        
        # Format prompt
        try:
            prompt = style_config["prompt"].format(
                angle=design_config["angle"],
                style=style
            )
        except KeyError as e:
            raise ValueError(f"Missing key in prompt formatting: {str(e)}")

        # Add random modifier
        modifiers = [
            "perfect lighting", "architectural digest quality", 
            "hyper-realistic", "highly detailed textures",
            "magazine cover quality", "award-winning design",
            "golden hour lighting", "professional 3D rendering",
            "ultra HD", "8K resolution"
        ]
        prompt += ", " + random.choice(modifiers)

        # Prepare multipart form data
        data = aiohttp.FormData()
        data.add_field('init_image', 
                     image_bytes, 
                     filename='input.png',
                     content_type='image/png')
        data.add_field('init_image_mode', 'IMAGE_STRENGTH')
        data.add_field('image_strength', str(params["image_strength"]))
        data.add_field('text_prompts[0][text]', prompt)
        data.add_field('text_prompts[0][weight]', '1.2')
        data.add_field('text_prompts[1][text]', style_config["negative_prompt"])
        data.add_field('text_prompts[1][weight]', '-1.0')
        data.add_field('cfg_scale', str(params["cfg_scale"]))
        data.add_field('samples', '1')
        data.add_field('steps', str(params["steps"]))
        data.add_field('seed', str(random.randint(0, 100000)))
        data.add_field('style_preset', 'photographic')

        # Make API request with timeout
        try:
            async with aiohttp.ClientSession() as session:
                async with session.post(
                    STABILITY_API_URL,
                    headers=HEADERS,
                    data=data,
                    timeout=60
                ) as response:
                    if response.status != 200:
                        error_detail = await response.text()
                        raise ValueError(
                            f"API returned status {response.status}: {error_detail}"
                        )
                    
                    result = await response.json()
                    
                    if not result.get("artifacts"):
                        raise ValueError("No artifacts in API response")
                    
                    return result["artifacts"][0]
                    
        except asyncio.TimeoutError:
            raise ValueError("API request timed out")
        except aiohttp.ClientError as e:
            raise ValueError(f"Network error: {str(e)}")

    except Exception as e:
        raise ValueError(f"Generation failed: {str(e)}")
    
@router.post("/generate-exterior-design/")
async def generate_exterior_design(
    user_id: str = Form(...),
    image: UploadFile = File(...),
    house_angle: HouseAngle = Form(...),
    design_style: ExteriorDesignStyle = Form(...),
    ai_strength: AIStylingStrength = Form("medium"),
    num_designs: int = Form(1, ge=1, le=12)
):
    try:
        from pathlib import Path
        from datetime import date
        from django.db import transaction
        from appln.models import UserData, UserSubscription, UserDesignHistory, CreditUsage

        BASE_DIR = Path(__file__).parent.parent
        uploads_dir = BASE_DIR / "fastapi_app" / "uploads"
        generated_dir = BASE_DIR / "fastapi_app" / "generated"
        uploads_dir.mkdir(parents=True, exist_ok=True)
        generated_dir.mkdir(parents=True, exist_ok=True)

        # Step 1: User & Subscription check
        try:
            user = await sync_to_async(UserData.objects.get)(id=user_id)
            subscription = await sync_to_async(UserSubscription.objects.filter(user=user).first)()
            if not subscription:
                raise HTTPException(status_code=404, detail="Subscription not found")
        except UserData.DoesNotExist:
            raise HTTPException(status_code=404, detail="User not found")

        # Step 2: Credit Check
        remaining_credits = subscription.total_credits - subscription.used_credits
        if remaining_credits < num_designs:
            raise HTTPException(
                status_code=402,
                detail={
                    "message": "Not enough credits",
                    "available": remaining_credits,
                    "required": num_designs
        }
            )

        # Step 3: Save original file
        try:
            file_ext = os.path.splitext(image.filename)[1].lower()
            if file_ext not in ['.jpg', '.jpeg', '.png']:
                raise HTTPException(status_code=400, detail="Only JPG, JPEG, and PNG files are allowed")

            original_filename = f"original_{uuid.uuid4().hex}{file_ext}"
            original_path = uploads_dir / original_filename

            await sync_to_async(lambda: shutil.copyfileobj(image.file, open(original_path, "wb")))()
            image_bytes, _ = await resize_to_allowed_dimensions(str(original_path))

        except Exception as e:
            if 'original_path' in locals() and original_path.exists():
                await sync_to_async(os.remove)(original_path)
            raise HTTPException(status_code=400, detail=f"Image processing failed: {str(e)}")

        # Step 4: Generate designs
        try:
            design_config = {
                "style": design_style.value,
                "angle": house_angle.value,
            }

            tasks = [
                generate_exterior_design_variation(image_bytes, design_config, ai_strength.value)
                for _ in range(num_designs)
            ]
            results = await asyncio.gather(*tasks)

        except Exception as e:
            if original_path.exists():
                await sync_to_async(os.remove)(original_path)
            raise HTTPException(status_code=500, detail=f"Design generation failed: {str(e)}")

        # Step 5: Save generated images to file system only
        generated_filenames = []
        try:
            for result in results:
                filename = f"generated_{uuid.uuid4().hex}.png"
                filepath = generated_dir / filename
                await sync_to_async(lambda: open(filepath, "wb").write(base64.b64decode(result["base64"])))()
                #Water mark for basic user
                if subscription.current_plan == "basic":
                    await sync_to_async(add_watermark_to_image)(str(filepath))
                generated_filenames.append(filename)

        except Exception as e:
            for fname in generated_filenames:
                await sync_to_async(os.remove)(generated_dir / fname)
            if original_path.exists():
                await sync_to_async(os.remove)(original_path)
            raise HTTPException(status_code=500, detail=f"Image saving failed: {str(e)}")

        # Step 6: Safe DB Update inside transaction.atomic
        try:
            @sync_to_async
            def save_db_changes():
                with transaction.atomic():
                    # Step 1: Delete old entries if user already has 30 or more
                    existing_entries = UserDesignHistory.objects.filter(user=user).order_by('created_at')
                    excess = existing_entries.count() + len(generated_filenames) - 10

                    if excess > 0:
                        for old_entry in existing_entries[:excess]:
                            # Correct paths based on your project folder structure
                            old_uploaded_path = BASE_DIR / "fastapi_app" / "uploads" / os.path.basename(old_entry.uploaded_image.name)
                            old_generated_path = BASE_DIR / "fastapi_app" / "generated" / os.path.basename(old_entry.generated_image.name)

                            if old_uploaded_path.exists():
                                os.remove(old_uploaded_path)
                            if old_generated_path.exists():
                                os.remove(old_generated_path)

                            old_entry.delete()

                    # Step 2: Add new generated records
                    for filename in generated_filenames:
                        UserDesignHistory.objects.create(
                            user=user,
                            uploaded_image=f"uploads/{original_filename}",
                            generated_image=f"generated/{filename}"
                        )

                    subscription.used_credits += num_designs
                    subscription.total_credits_used_all_time += num_designs
                    subscription.save()
                    

                    today = date.today()
                    credit_entry, created = CreditUsage.objects.get_or_create(
                        user=user,
                        date=today,
                        defaults={"credits_used": num_designs}
                    )
                    if not created:
                        credit_entry.credits_used += num_designs
                        credit_entry.save()

            await save_db_changes()

        except Exception as e:
            for fname in generated_filenames:
                await sync_to_async(os.remove)(generated_dir / fname)
            if original_path.exists():
                await sync_to_async(os.remove)(original_path)
            raise HTTPException(status_code=500, detail=f"Database update failed: {str(e)}")

        # Step 7: Final Response
        return {
            "success": True,
            "original_image": f"/static_uploads/{original_filename}",
            "designs": [f"/static_generated/{f}" for f in generated_filenames],
            "credits": {
                "remaining": subscription.balance_credits,
                "used": subscription.used_credits,
                "total": subscription.total_credits
            },
            "message": "Exterior designs generated successfully"
        }

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Unexpected error: {str(e)}")



"""@router.post("/generate-exterior-design/")
async def generate_exterior_design(
    image: UploadFile = File(...),
    house_angle: HouseAngle = Form(...),
    design_style: ExteriorDesignStyle = Form(...),
    ai_strength: AIStylingStrength = Form("medium"),
    num_designs: int = Form(1, ge=1, le=12)
):
    try:
        from pathlib import Path

        BASE_DIR = Path(__file__).parent.parent
        uploads_dir = BASE_DIR / "fastapi_app" / "uploads"
        generated_dir = BASE_DIR / "fastapi_app" / "generated"

        # Save original file
        file_ext = os.path.splitext(image.filename)[1]
        original_filename = f"original_{uuid.uuid4().hex}{file_ext}"
        original_path = uploads_dir / original_filename

        with open(original_path, "wb") as f:
            shutil.copyfileobj(image.file, f)

        # Resize/process image
        image_bytes, _ = await resize_to_allowed_dimensions(str(original_path))

        design_config = {
            "style": design_style.value,
            "angle": house_angle.value,
        }

        tasks = [
            generate_exterior_design_variation(
                image_bytes,
                design_config,
                ai_strength.value
            ) for _ in range(num_designs)
        ]

        results = await asyncio.gather(*tasks)

        # Save results
        generated_urls = []
        for result in results:
            filename = f"generated_{uuid.uuid4().hex}.png"
            filepath = generated_dir / filename
            with open(filepath, "wb") as f:
                f.write(base64.b64decode(result["base64"]))
            generated_urls.append(f"/static_generated/{filename}")

        return {
            "success": True,
            "original_image": f"/static_uploads/{original_filename}",
            "designs": generated_urls,
            "message": "Designs generated successfully"
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {str(e)}")"""

#out door 
class OutdoorSpaceType(str, Enum):
    FRONT_YARD = "front yard"
    BACKYARD = "backyard"
    BALCONY = "balcony"
    TERRACE_ROOFTOP = "terrace/rooftop"  # Changed from terrace/rooftop
    DRIVEWAY_PARKING = "driveway/parking"  # Changed from driveway/parking
    WALKWAY_PATH = "walkway/path"  # Changed from walkway/path
    LOUNGE = "lounge"
    PORCH = "porch"
    FENCE = "fence"
    GARDEN = "garden"

class OutdoorDesignStyle(str, Enum):
    MODERN = "modern"
    CONTEMPORARY = "contemporary"
    TRADITIONAL = "traditional"
    RUSTIC = "rustic"
    SCANDINAVIAN = "scandinavian"
    CLASSIC_GARDEN = "classic garden"
    COASTAL_OUTDOOR = "coastal outdoor"
    FARMHOUSE = "farmhouse"
    COTTAGE_GARDEN = "cottage garden"
    INDUSTRIAL = "industrial"
    BEACH = "beach"

OUTDOOR_STRENGTH_CONFIG = {
    "very low": {"image_strength": 0.45, "steps": 45, "cfg_scale": 10},
    "low": {"image_strength": 0.40, "steps": 50, "cfg_scale": 11},
    "medium": {"image_strength": 0.35, "steps": 50, "cfg_scale": 12},  # Changed from 55 to 50
    "high": {"image_strength": 0.30, "steps": 50, "cfg_scale": 13}     # Changed from 60 to 50
}

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

async def outdoor_resize_to_allowed_dimensions(image_path: str):
    """
    Resize the image to the closest allowed SDXL dimension based on aspect ratio.
    Returns: (image_bytes, (new_width, new_height))
    """
    try:
        with Image.open(image_path) as img:
            img = img.convert("RGB")  # Ensure correct mode
            width, height = img.size
            aspect_ratio = width / height

            # Find closest allowed dimension by comparing aspect ratios
            closest_dim = min(
                ALLOWED_DIMENSIONS,
                key=lambda dim: abs((dim[0] / dim[1]) - aspect_ratio)
            )

            # If the image is already close enough to a valid dimension, skip resizing
            if abs(width - closest_dim[0]) < 100 and abs(height - closest_dim[1]) < 100:
                with open(image_path, "rb") as f:
                    return f.read(), (width, height)

            # Resize using high-quality resampling
            resized_img = img.resize(closest_dim, Image.LANCZOS)
            img_bytes = io.BytesIO()
            resized_img.save(img_bytes, format="PNG", optimize=True, quality=90)
            return img_bytes.getvalue(), closest_dim

    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Image processing error: {str(e)}")
    

# Style configurations for outdoor
OUTDOOR_STYLE_CONFIGS = {
    "modern": {
        "prompt": "Modern {space_type} with clean lines, sleek outdoor furniture, minimal landscaping, {style} style",
        "negative_prompt": "traditional, rustic, cluttered, overgrown"
    },
    "contemporary": {
        "prompt": "Contemporary {space_type} with innovative layout, stylish materials, modern lighting, {style} style",
        "negative_prompt": "vintage, outdated, chaotic, dark"
    },
    "traditional": {
        "prompt": "Traditional {space_type} with classic landscaping, balanced design, cozy seating, {style} style",
        "negative_prompt": "futuristic, industrial, minimalist"
    },
    "rustic": {
        "prompt": "Rustic {space_type} with natural wood, stone elements, vintage charm, cozy vibes, {style} style",
        "negative_prompt": "modern, polished, synthetic"
    },
    "scandinavian": {
        "prompt": "Scandinavian {space_type} with clean simplicity, light wood, minimalism, natural tones, {style} style",
        "negative_prompt": "ornate, cluttered, industrial"
    },
    "classic garden": {
        "prompt": "Classic garden {space_type} with symmetrical layout, trimmed hedges, elegant planters, {style} style",
        "negative_prompt": "wild, messy, futuristic"
    },
    "coastal outdoor": {
        "prompt": "Coastal {space_type} with ocean-inspired tones, light textures, airy seating, beachy plants, {style} style",
        "negative_prompt": "dark, urban, heavy"
    },
    "farmhouse": {
        "prompt": "Farmhouse-style {space_type} with natural wood, reclaimed elements, vintage accessories, {style} style",
        "negative_prompt": "sleek, modern, artificial"
    },
    "cottage garden": {
        "prompt": "Cottage garden {space_type} with colorful flowers, curving paths, storybook charm, {style} style",
        "negative_prompt": "structured, minimalist, modern"
    },
    "industrial": {
        "prompt": "Industrial {space_type} with exposed concrete, metal structures, bold lighting, urban design, {style} style",
        "negative_prompt": "floral, vintage, traditional"
    },
    "beach": {
        "prompt": "Beach-style {space_type} with sandy textures, driftwood decor, relaxed seating, breezy colors, {style} style",
        "negative_prompt": "formal, sharp, dark"
    }
}


async def generate_outdoor_design_variation(
    image_bytes: bytes,
    design_config: dict,
    strength_level: str
) -> dict:
    """Robust outdoor design generation with enhanced error handling"""
    try:
        # Validate strength level
        strength_level = strength_level.lower()
        if strength_level not in OUTDOOR_STRENGTH_CONFIG:
            raise ValueError(f"Invalid strength level: {strength_level}")

        params = OUTDOOR_STRENGTH_CONFIG[strength_level]

        # Validate and format design style
        style = design_config["style"].lower()
        if style not in OUTDOOR_STYLE_CONFIGS:
            raise ValueError(f"Invalid design style: {style}")

        style_config = OUTDOOR_STYLE_CONFIGS[style]

        # Format space type (handle enum values consistently)
        space_type = design_config["space_type"].lower().replace("_", " ").replace("/", " ")

        # Build enhanced prompt
        prompt = style_config["prompt"].format(space_type=space_type.title(), style=style.lower().replace("_", " ")) # Corrected formatting
        prompt += ", ultra realistic, 8K resolution, professional photography, detailed textures"

        # Enhanced negative prompt
        negative_prompt = (
            style_config["negative_prompt"] + ", " +
            "blurry, distorted proportions, bad lighting, flat colors, " +
            "cartoonish, painting-like, unrealistic materials"
        )

        # Prepare API request
        data = aiohttp.FormData()
        data.add_field('init_image', image_bytes, filename='input.png', content_type='image/png')
        data.add_field('init_image_mode', 'IMAGE_STRENGTH')
        data.add_field('image_strength', str(params["image_strength"]))
        data.add_field('text_prompts[0][text]', prompt)
        data.add_field('text_prompts[0][weight]', '1.5')
        data.add_field('text_prompts[1][text]', negative_prompt)
        data.add_field('text_prompts[1][weight]', '-1.2')
        data.add_field('cfg_scale', str(params["cfg_scale"]))
        data.add_field('samples', '1')
        data.add_field('steps', str(params["steps"]))
        data.add_field('seed', str(random.randint(0, 100000)))
        data.add_field('style_preset', 'photographic')
        data.add_field('sampler', 'K_DPMPP_2M')

        # Make API request with timeout
        try:
            async with aiohttp.ClientSession() as session:
                async with session.post(
                    STABILITY_API_URL,
                    headers=HEADERS,
                    data=data,
                    timeout=aiohttp.ClientTimeout(total=90)
                ) as response:
                    if response.status != 200:
                        error_detail = await response.text()
                        logger.error(f"API Error: {response.status} - {error_detail}")
                        raise ValueError(f"API request failed with status {response.status}")

                    result = await response.json()
                    if not result.get("artifacts"):
                        raise ValueError("No artifacts in API response")

                    return result["artifacts"][0]

        except asyncio.TimeoutError:
            raise ValueError("API request timed out")
        except aiohttp.ClientError as e:
            raise ValueError(f"Network error: {str(e)}")

    except Exception as e:
        logger.error(f"Generation failed: {str(e)}", exc_info=True)
        raise
@router.post("/generate-outdoor-design/")
async def generate_outdoor_design(
    user_id: str = Form(...),
    image: UploadFile = File(...),
    space_type: OutdoorSpaceType = Form(...),
    design_style: OutdoorDesignStyle = Form(...),
    ai_strength: str = Form("medium"),
    num_designs: int = Form(1, ge=1, le=6)
):
    try:
        from django.utils import timezone
        from datetime import date
        from appln.models import UserData, UserSubscription, UserDesignHistory, CreditUsage

        uploads_path.mkdir(parents=True, exist_ok=True)
        generated_path.mkdir(parents=True, exist_ok=True)

        # Step 1: User & Subscription
        try:
            user = await sync_to_async(UserData.objects.get)(id=user_id)
            subscription = await sync_to_async(UserSubscription.objects.filter(user=user).first)()
            if not subscription:
                raise HTTPException(status_code=404, detail="Subscription not found")
        except UserData.DoesNotExist:
            raise HTTPException(status_code=404, detail="User not found")

        # Step 2: Credit Check
        remaining_credits = subscription.total_credits - subscription.used_credits
        if remaining_credits < num_designs:
            raise HTTPException(
                status_code=402,
                detail={
                    "message": "Not enough credits",
                    "available": remaining_credits,
                    "required": num_designs
        }
        )

        # Step 3: Process Original Image
        try:
            file_ext = os.path.splitext(image.filename)[1].lower()
            if file_ext not in ['.jpg', '.jpeg', '.png']:
                raise HTTPException(status_code=400, detail="Only JPG, JPEG, and PNG files are allowed")

            original_filename = f"original_{uuid.uuid4().hex}{file_ext}"
            original_path = uploads_path / original_filename
            await sync_to_async(lambda: shutil.copyfileobj(image.file, open(original_path, "wb")))()

            image_bytes, _ = await outdoor_resize_to_allowed_dimensions(str(original_path))
        except Exception as e:
            if 'original_path' in locals() and original_path.exists():
                await sync_to_async(os.remove)(original_path)
            raise HTTPException(status_code=400, detail=f"Image processing failed: {str(e)}")

        # Step 4: Generate Designs
        try:
            design_config = {
                "style": design_style.value.lower(),
                "space_type": space_type.value.lower(),
            }

            tasks = [
                generate_outdoor_design_variation(image_bytes, design_config, ai_strength.lower())
                for _ in range(num_designs)
            ]
            results = await asyncio.gather(*tasks)
        except Exception as e:
            if original_path.exists():
                await sync_to_async(os.remove)(original_path)
            raise HTTPException(status_code=500, detail=f"Design generation failed: {str(e)}")

        # Step 5: Save Generated Images
        generated_filenames = []
        try:
            for result in results:
                filename = f"generated_{uuid.uuid4().hex}.png"
                filepath = generated_path / filename
                await sync_to_async(lambda: open(filepath, "wb").write(base64.b64decode(result["base64"])))()
                #Water mark for basic user
                if subscription.current_plan == "basic":
                    await sync_to_async(add_watermark_to_image)(str(filepath))
                generated_filenames.append(filename)
        except Exception as e:
            for fname in generated_filenames:
                await sync_to_async(os.remove)(generated_path / fname)
            if original_path.exists():
                await sync_to_async(os.remove)(original_path)
            raise HTTPException(status_code=500, detail=f"Image saving failed: {str(e)}")

        # Step 6: DB Save
        try:
            @sync_to_async
            def save_db_changes():
                with transaction.atomic():
                    # Step 1: Delete old entries if user already has 30 or more
                    existing_entries = UserDesignHistory.objects.filter(user=user).order_by('created_at')
                    excess = existing_entries.count() + len(generated_filenames) - 10

                    if excess > 0:
                        for old_entry in existing_entries[:excess]:
                            # Correct paths based on your project folder structure
                            old_uploaded_path = BASE_DIR / "fastapi_app" / "uploads" / os.path.basename(old_entry.uploaded_image.name)
                            old_generated_path = BASE_DIR / "fastapi_app" / "generated" / os.path.basename(old_entry.generated_image.name)

                            if old_uploaded_path.exists():
                                os.remove(old_uploaded_path)
                            if old_generated_path.exists():
                                os.remove(old_generated_path)

                            old_entry.delete()

                    # Step 2: Add new generated records
                    for filename in generated_filenames:
                        UserDesignHistory.objects.create(
                            user=user,
                            uploaded_image=f"uploads/{original_filename}",
                            generated_image=f"generated/{filename}"
                        )

                    subscription.used_credits += num_designs
                    subscription.total_credits_used_all_time += num_designs
                    subscription.save()

                    today = date.today()
                    credit_entry, created = CreditUsage.objects.get_or_create(
                        user=user,
                        date=today,
                        defaults={"credits_used": num_designs}
                    )
                    if not created:
                        credit_entry.credits_used += num_designs
                        credit_entry.save()

            await save_db_changes()

        except Exception as e:
            for fname in generated_filenames:
                await sync_to_async(os.remove)(generated_path / fname)
            if original_path.exists():
                await sync_to_async(os.remove)(original_path)
            raise HTTPException(status_code=500, detail=f"Database update failed: {str(e)}")

        # Step 7: Response
        return {
            "success": True,
            "original_image": f"/static_uploads/{original_filename}",
            "designs": [f"/static_generated/{f}" for f in generated_filenames],
            "credits": {
                "remaining": subscription.balance_credits,
                "used": subscription.used_credits,
                "total": subscription.total_credits
            },
            "message": "Designs generated successfully"
        }

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Unexpected error: {str(e)}")
    
"""@router.post("/generate-outdoor-design/")
async def generate_outdoor_design(
    image: UploadFile = File(...),
    space_type: OutdoorSpaceType = Form(...),
    design_style: OutdoorDesignStyle = Form(...),
    ai_strength: str = Form("medium"),
    num_designs: int = Form(1, ge=1, le=12)
):
    try:
        logger.info(f"Starting generation for {space_type.value} with style {design_style.value}")
        
        # Validate inputs
        if num_designs < 1 or num_designs > 12:
            raise ValueError("Number of designs must be between 1 and 12")
            
        # Setup directories
        from pathlib import Path

        BASE_DIR = Path(__file__).parent.parent
        uploads_dir = BASE_DIR / "fastapi_app" / "uploads"
        generated_dir = BASE_DIR / "fastapi_app" / "generated"

        
        
        uploads_dir.mkdir(exist_ok=True, parents=True)
        generated_dir.mkdir(exist_ok=True, parents=True)
        
        # Save original image
        file_ext = os.path.splitext(image.filename)[1].lower()
        if file_ext not in ('.jpg', '.jpeg', '.png'):
            raise ValueError("Only JPG/PNG images are supported")
            
        original_filename = f"original_{uuid.uuid4().hex}{file_ext}"
        original_path = uploads_dir / original_filename
        
        try:
            with open(original_path, "wb") as f:
                shutil.copyfileobj(image.file, f)
        except Exception as e:
            raise ValueError(f"Failed to save image: {str(e)}")
        
        # Process image
        try:
            image_bytes, _ = await outdoor_resize_to_allowed_dimensions(original_path)
            if not image_bytes:
                raise ValueError("Image processing failed - empty result")
        except Exception as e:
            raise ValueError(f"Image processing error: {str(e)}")
        
        # Prepare config
        design_config = {
            "style": design_style.value,
            "space_type": space_type.value
        }
        
        # Generate designs
        generated_urls = []
        tasks = [
            generate_outdoor_design_variation(
                image_bytes,
                design_config,
                ai_strength.lower()
            ) for _ in range(num_designs)
        ]
        
        results = await asyncio.gather(*tasks, return_exceptions=True)
        
        # Process results
        for i, result in enumerate(results):
            if isinstance(result, Exception):
                logger.error(f"Design {i} failed: {str(result)}")
                continue
                
            filename = f"generated_{uuid.uuid4().hex}.png"
            filepath = generated_dir / filename
            
            try:
                with open(filepath, "wb") as f:
                    f.write(base64.b64decode(result["base64"]))
                generated_urls.append(f"/static_generated/{filename}")
            except Exception as e:
                logger.error(f"Failed to save design {i}: {str(e)}")
        
        if not generated_urls:
            raise ValueError("All design generations failed")
            
        return {
            "success": True,
            "original_image": f"/static_uploads/{original_filename}",
            "designs": generated_urls,
            "metadata": {
                "space_type": space_type.value,
                "design_style": design_style.value,
                "num_designs": num_designs,
                "styling_strength": ai_strength
            }
        }
        
    except ValueError as e:
        logger.error(f"Validation error: {str(e)}")
        raise HTTPException(400, detail=str(e))
    except Exception as e:
        logger.error(f"Unexpected error: {str(e)}", exc_info=True)
        raise HTTPException(500, detail="Internal server error")"""