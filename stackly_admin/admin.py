from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import (
    CustomUser, Plan, CouponCode, CustomerUser, 
    APIUsageLog, ContactMessage, AdminSettings, 
    UserProfile, Notification
)

# Customizing CustomUser admin display
@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    list_display = ('username', 'email', 'role', 'is_active', 'is_staff')
    list_filter = ('role', 'is_active', 'is_staff')
    search_fields = ('username', 'email', 'role')
    ordering = ('-date_joined',)
    fieldsets = (
        (None, {'fields': ('username', 'email', 'password', 'role')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'email', 'role', 'password1', 'password2', 'is_active', 'is_staff', 'is_superuser'),
        }),
    )

# Other models admin registrations
@admin.register(Plan)
class PlanAdmin(admin.ModelAdmin):
    list_display = (
        'id', 'name', 'price', 'validity_days', 'max_api_calls', 'is_active', 'display_features'
    )
    list_filter = ('is_active',)
    search_fields = ('name', "id")
    ordering = ('-id',)
    readonly_fields = ('expiry_date',)

    fieldsets = (
        (None, {
            'fields': ('name', 'price', 'validity_days', 'expiry_date', 'max_api_calls', 'is_active')
        }),
        ('Features', {
            'fields': ('features',)
        }),
    )

    def display_features(self, obj):
        try:
            return ", ".join(
                [f if isinstance(f, str) else f.get("text", str(f)) for f in obj.get_features_list()]
            )
        except Exception as e:
            return "Invalid data"
    display_features.short_description = 'Features'




@admin.register(CouponCode)
class CouponCodeAdmin(admin.ModelAdmin):
    list_display = ('code', 'discount_percentage', 'valid_from', 'valid_to', 'is_active')
    list_filter = ('is_active',)
    search_fields = ('code',)


@admin.register(CustomerUser)
class CustomerUserAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone_number', 'country', 'plan', 'credits', 'status')
    list_filter = ('plan', 'status')
    search_fields = ('name', 'email', 'phone_number')


@admin.register(APIUsageLog)
class APIUsageLogAdmin(admin.ModelAdmin):
    list_display = ('user', 'endpoint', 'timestamp', 'credits_used')
    list_filter = ('user', 'timestamp')
    search_fields = ('user__username', 'endpoint')


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'subject', 'email', 'created_at')
    search_fields = ('name', 'email', 'subject')


@admin.register(AdminSettings)
class AdminSettingsAdmin(admin.ModelAdmin):
    list_display = ('user', 'email_alerts', 'theme_mode')
    list_filter = ('email_alerts', 'theme_mode')
    search_fields = ('user__username',)


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'email', 'name', 'mobile', 'user_status', 'users_created_at')
    list_filter = ('user_status',)
    search_fields = ('user__username', 'email', 'name', 'mobile')


@admin.register(Notification)
class NotificationAdmin(admin.ModelAdmin):
    list_display = ('message', 'register', 'is_read', 'created_at')
    list_filter = ('is_read', 'created_at')
    search_fields = ('message', 'register__username')


# Optional: Unregister default Group model if not used
from django.contrib.auth.models import Group
admin.site.unregister(Group)
