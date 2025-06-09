# fastapi_app/credit_usage.py

from fastapi import APIRouter, Query
from datetime import date
from django.db.models import Sum
from appln.models import CreditUsage, UserData

router = APIRouter()

# Function to call after image generation success
def record_credit_usage(user_id: int, credits_used: int):
    CreditUsage.objects.create(
        user_id=user_id,
        date=date.today(),
        credits_used=credits_used
    )

# Endpoint to return credit usage per day for a month
@router.get("/credit-usage/")
def get_credit_usage(
    user_id: int = Query(..., description="User ID"),
    year: int = Query(..., description="Year, e.g. 2025"),
    month: int = Query(..., description="Month (1-12)")
):
    # Get all records for the month
    usage_qs = CreditUsage.objects.filter(
        user_id=user_id,
        date__year=year,
        date__month=month
    )

    # Prepare result for days 1–31
    result = []
    for day in range(1, 32):
        credits = usage_qs.filter(date__day=day).aggregate(
            total=Sum('credits_used')
        )['total'] or 0
        result.append({
            "day": day,
            "credits": credits
        })

    return {
        "user_id": user_id,
        "year": year,
        "month": month,
        "data": result
    }
