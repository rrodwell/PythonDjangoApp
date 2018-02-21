from django import forms
from scheduler.models import Appointment

class NewApptForm(forms.ModelForm):
    class Meta:
        model = Appointment
        fields = '__all__'