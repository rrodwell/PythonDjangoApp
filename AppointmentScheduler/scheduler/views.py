from django.shortcuts import render
from scheduler.models import Appointment
from scheduler.forms import NewApptForm
from django.core import serializers
from django.http import HttpResponse
import json


# Create your views here.

def index(request):

    # appoint_list = Appointment.objects.filter(
    #         description__icontains = "D"
    #     )
    # appt_dict = {
    #     'appointment_records': appoint_list,
    # }

    return render(request,'scheduler/index.html')

def schedule_appt(request):
    if request.method == "POST":
        date = request.POST['date']
        time = request.POST['time']
        description = request.POST['description']

        Appointment.objects.create(
            date = date,
            time = time,
            description = description
        )

        return HttpResponse('')


def search_appt(request):
    if request.method == "GET":
        description = request.GET['description']

        appoint_list = Appointment.objects.filter(
            description__icontains = description
        )
        appt_dict = {
        'appointment_records': appoint_list,
        }

        data = serializers.serialize("json", appoint_list)
        return HttpResponse(data, content_type='application/json')

    # return HttpResponse(json.dumps(appt_dict))



