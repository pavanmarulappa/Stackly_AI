from django import forms

class SignupForm(forms.Form):
    email = forms.EmailField()
    password = forms.CharField(widget=forms.PasswordInput())
    coupon_code = forms.CharField(max_length=20, required=False)  # No validation for now
