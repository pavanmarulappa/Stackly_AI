from django.core.exceptions import PermissionDenied
from django.shortcuts import redirect
from django.contrib import messages
from functools import wraps

def get_user_role(user):
    if user.is_superuser:
        return 'SuperAdmin'
    elif user.is_staff:
        return 'Admin'
    elif user.groups.filter(name='Moderator').exists():
        return 'Moderator'
    else:
        return 'User'

def role_required(*allowed_roles):
    def decorator(view_func):
        @wraps(view_func)
        def _wrapped_view(request, *args, **kwargs):
            if not request.user.is_authenticated:
                return redirect('admin_login')  # or your login url

            user_role = get_user_role(request.user)

            if user_role in allowed_roles:
                return view_func(request, *args, **kwargs)
            else:
                raise PermissionDenied  # this will trigger your 403.html template
        return _wrapped_view
    return decorator

