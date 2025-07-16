from django.urls import path
from . import views

urlpatterns = [
    path('', views.dashboard, name='dashboard'),
    path('login/', views.user_login, name='admin_login'),
   path('logout/', views.user_logout, name='admin_logout'),


    # Plan management
    path('manage_plans/', views.manage_plans, name='manage_plans'),
    path('plans/edit/<int:id>/', views.edit_plan, name='edit_plan'),
    path('delete_plan/<int:id>/', views.delete_plan, name='delete_plan'),
    path('plans/activate/<int:id>/', views.activate_plan, name='activate_plan'),
    path('plans/deactivate/<int:id>/', views.deactivate_plan, name='deactivate_plan'),

    # Coupon management
    path('create_coupons/', views.create_coupon, name='create_coupon'),
    path('coupons/edit/<int:id>/', views.edit_coupon, name='edit_coupon'),
    path('coupons/delete/<int:id>/', views.delete_coupon, name='delete_coupon'),
    path('coupons/activate/<int:id>/', views.activate_coupon, name='activate_coupon'),
    path('coupons/deactivate/<int:id>/', views.deactivate_coupon, name='deactivate_coupon'),

    path('users/', views.user_list, name='user_list'),
    path('api-usage-chart/', views.api_usage_monitor, name='api_usage_chart'),

    #Profile Section
    path("create-profile/", views.create_profile, name="create_profile"),
    path('edit_profile/', views.edit_profile, name="edit_profile"),
    path("view-profile/", views.view_profile, name="view_profile"),
    path('update/<int:profile_id>', views.update_profile, name='update_profile'),
    path("delete-profile/<int:profile_id>/", views.delete_profile, name="delete_profile"),


    path('settings/', views.settings_view, name='settings'),


    path('contact-us/', views.contact_us_admin, name='admin_contact_us'),
    path('help-center/', views.help_center, name='help_center'),
    path('clear-notifications/', views.clear_notifications, name='clear_notifications'),
    path('notifications/mark_all_read/', views.mark_all_read, name='mark_all_read'),

    path('manage_payments/', views.manage_payments, name='manage_payments'),
    path('total-payments/', views.total_payments, name='total_payments'),
    path('successful-payments/', views.successful_payments, name='successful_payments'),
    path('failed-payments/', views.failed_payments, name='failed_payments'),

    path('access-management/', views.access_management, name='access_management'),
    path('permission-denied/', views.permission_denied, name='permission_denied'),
    # path('toggle-status/<int:user_id>/', views.toggle_user_status, name='toggle_user_status'),

    path('api/plans/', views.get_active_plans, name='get_active_plans'),
]