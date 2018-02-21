from django.conf.urls import url
from scheduler import views

urlpatterns = [
    url(r'^$',views.index, name='index'),
    url(r'^form/',views.new_appt,name='form_name'),
]