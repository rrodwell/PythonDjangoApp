from django.shortcuts import render
from scheduler.models import Appointments

# Create your views here.
def index(request):
    appt_dict = {
        'appointment_records': "HELL"
    }

    return render(request, 'scheduler/index.html', context=appt_dict)