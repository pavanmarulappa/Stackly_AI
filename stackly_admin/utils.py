from .models import Notification

def add_notification(message, user=None):
    Notification.objects.create(message=message, register=user)
