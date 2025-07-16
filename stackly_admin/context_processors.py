def global_notifications(request):
    notifications = [
         "New user 'Venkata' registered.",
        "API usage limit approaching for user 'Roshitha'.",
        "Plan 'Gold' expired for user 'Sravan'.",
        "New coupon 'SUMMER50' added.",
        "API Service downtime scheduled for tonight."
    ]
    return {'notifications': notifications}

