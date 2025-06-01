from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.user_list, name='user_list'),
    path('edit-user/<int:user_id>/', views.edit_user, name='edit_user'),
    path('deactiveuser/<int:user_id>/', views.deactiveuser, name='deactiveuser'),
    path('activeuser/<int:user_id>/', views.activeuser, name='activeuser'),
]
