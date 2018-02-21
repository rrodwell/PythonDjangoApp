from django.shortcuts import render
from scheduler.models import Appointment

# Create your views here.

def index(request):

    appoint_list = Appointment.objects.order_by('ID')
    appt_dict = {
        'appointment_records': appoint_list,
    }

    return render(request,'scheduler/index.html', context=appt_dict)