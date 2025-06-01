from django.shortcuts import render, redirect, get_object_or_404
from django.db.models import Q
from appln.models import User  

def user_list(request):
    query = request.GET.get('q')
    plan_filter = request.GET.get('plan')

    users = User.objects.all()

    if query:
        users = users.filter(
            Q(username__icontains=query) |
            Q(email__icontains=query)
        )

    if plan_filter:
        users = users.filter(plan=plan_filter)

    return render(request, 'stackly_admin/user_list.html', {'users': users})

def edit_user(request, user_id):
    user = User.objects.get(id=user_id)

    if request.method == 'POST':
        user.username = request.POST.get('username')
        user.email = request.POST.get('email')
        user.phone_number = request.POST.get('phone_number')
        user.country = request.POST.get('country')
        user.plan = request.POST.get('plan')
        user.credits = request.POST.get('credits')
        user.save()
        return redirect('user_list')

    return render(request, 'stackly_admin/edit_user.html', {'user': user})

def deactiveuser(request, id):
    display = User.objects.get(id=id)
    display.country_status = False
    display.save()
    return redirect('create_countries')


def activeuser(request, id):
    display = User.objects.get(id=id)
    display.country_status = True
    display.save()
    return redirect('create_countries')

