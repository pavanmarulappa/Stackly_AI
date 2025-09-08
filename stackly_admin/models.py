from django.db import models
from django.conf import settings
from django.utils import timezone
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from django.utils import timezone
from django.contrib.auth.models import BaseUserManager
from django.db import models
from django.contrib.auth import get_user_model
from django.utils import timezone
from datetime import timedelta
import json
from django.conf import settings

User = settings.AUTH_USER_MODEL 


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('role', 'SuperAdmin')  # <--- set SuperAdmin role here

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, password, **extra_fields)


class CustomUser(AbstractUser):
    ROLE_CHOICES = (
        ('SuperAdmin', 'SuperAdmin'),
        ('Admin', 'Admin'),
        ('Moderator', 'Moderator'),
        ('User', 'User'),
    )

    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='User')

    objects = CustomUserManager()




from django.db import models 
from django.utils import timezone
from datetime import timedelta

from django.db import models  
from django.utils import timezone
from datetime import timedelta

class Plan(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    validity_days = models.IntegerField()
    expiry_date = models.DateField(null=True, blank=True)
    max_api_calls = models.IntegerField()
    features = models.JSONField(default=list)  # <-- list of feature strings

    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.expiry_date and self.validity_days:
            self.expiry_date = timezone.now().date() + timedelta(days=self.validity_days)
        super().save(*args, **kwargs)

    def get_offer(self):
        now = timezone.now()
        coupon = self.coupons.filter(
            is_active=True,
            valid_from__lte=now,
            valid_to__gte=now
        ).first()
        if coupon:
            return {
                "offerCode": coupon.code,
                "offerText": coupon.offer_text,
                "discountPercentage": coupon.discount_percentage  # <-- added
            }
        return None

    def get_features_list(self):
        """Helper method to get features as a list"""
        return self.features if isinstance(self.features, list) else json.loads(self.features)



class CouponCode(models.Model):
    COUPON_TYPES = (
        ('general', 'General'),
        ('plan_specific', 'Plan Specific'),
        ('user_specific', 'User Specific'),
    )
    
    code = models.CharField(max_length=20, unique=True)
    offer_text = models.CharField(max_length=20, unique=True,null=True, blank=True)
    coupon_type = models.CharField(max_length=20, choices=COUPON_TYPES, default='general')
    discount_percentage = models.PositiveIntegerField()
    description = models.TextField(null=True, blank=True)
    valid_from = models.DateTimeField()
    valid_to = models.DateTimeField()
    is_active = models.BooleanField(default=True)
   
    
    # Plan relationship
    plan = models.ForeignKey(Plan, null=True, blank=True, on_delete=models.SET_NULL, 
                           related_name='coupons')
    
    # User relationship
    user = models.ForeignKey(User, null=True, blank=True, on_delete=models.SET_NULL)
    max_uses = models.PositiveIntegerField(default=1)
    times_used = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.code
    
    def is_valid(self):
        now = timezone.now()
        return (
            self.is_active and
            self.valid_from <= now <= self.valid_to and
            (self.times_used < self.max_uses if self.max_uses > 0 else True)
        )
    
    def can_be_applied(self, plan=None, user=None):
        if not self.is_valid():
            return False
        
        if self.coupon_type == 'plan_specific':
            return plan == self.plan
        
        if self.coupon_type == 'user_specific':
            return user == self.user
        
        return True



class CustomerUser(models.Model):  # Renamed from lowercase 'user'
    PLAN_CHOICES = (
        ('Free', 'Free'),
        ('Silver', 'Silver'),
        ('Gold', 'Gold'),
    )
    STATUS_CHOICES = (
        ('Active', 'Active'),
        ('Inactive', 'Inactive'),
    )
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)
    country = models.CharField(max_length=50)
    plan = models.CharField(max_length=10, choices=PLAN_CHOICES, default='Free')
    credits = models.PositiveIntegerField(default=0)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='Active')
    expiry_date = models.DateField(null=True, blank=True)
    profile_picture = models.ImageField(null=True, blank=True)

    def __str__(self):
        return self.name


class APIUsageLog(models.Model):
    user = models.ForeignKey('stackly_admin.CustomUser', on_delete=models.CASCADE)
    endpoint = models.CharField(max_length=200)
    timestamp = models.DateTimeField(auto_now_add=True)
    credits_used = models.IntegerField()

    def __str__(self):
        return f"{self.user.username} called {self.endpoint} on {self.timestamp.strftime('%Y-%m-%d %H:%M')}"


class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    subject = models.CharField(max_length=150)
    email = models.EmailField()
    message = models.TextField()
    attachment = models.FileField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)


class AdminSettings(models.Model):
    user = models.OneToOneField('stackly_admin.CustomUser', on_delete=models.CASCADE)
    email_alerts = models.BooleanField(default=False)
    theme_mode = models.CharField(max_length=20, default='light')

    def __str__(self):
        return f"Settings for {self.user.username}"


class UserProfile(models.Model):
    user = models.ForeignKey('stackly_admin.CustomUser', on_delete=models.CASCADE)
    email = models.EmailField(default='default@example.com')
    name = models.CharField(max_length=100, null=True)
    mobile = models.CharField(max_length=15, blank=True, null=True)
    image = models.ImageField(upload_to='profile_images/', blank=True, null=True)
    user_status = models.CharField(max_length=20, default='Active')
    users_created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Notification(models.Model):
    message = models.TextField()
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    register = models.ForeignKey('stackly_admin.CustomUser', on_delete=models.CASCADE)

    def __str__(self):
        return self.message
