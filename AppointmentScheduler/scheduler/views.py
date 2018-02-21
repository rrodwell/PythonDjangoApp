from django.shortcuts import render
from scheduler.models import Appointment
from scheduler.forms import NewApptForm
from django.http import HttpResponse
# Create your views here.

def index(request):

    appoint_list = Appointment.objects.order_by('id')
    appt_dict = {
        'appointment_records': appoint_list,
    }

    return render(request,'scheduler/index.html', context=appt_dict)

# def new_appt(request):

#     form = NewApptForm()

#     if request.method == "POST":
#         form = NewApptForm(request.POST)
#         print(form)

#         if form.is_valid():
#             form.save(commit=True)
#             return index(request)

#     return render(request,"scheduler/index.html", {"form":form})

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
# def new_appt(request):
#     if request.method == 'POST':
#         post_text = request.POST.get('the_post')
#         response_data = {}

#         post = Post(text=post_text, author=request.user)
#         post.save()

#         response_data['result'] = 'Create post successful!'
#         response_data['postpk'] = post.pk
#         response_data['text'] = post.text


#         return HttpResponse(
#             json.dumps(response_data),
#             content_type="application/json"
#         )
#     else:
#         return HttpResponse(
#             json.dumps({"nothing to see": "this isn't happening"}),
#             content_type="application/json"
#         )



