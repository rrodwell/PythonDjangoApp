import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE","AppointmentScheduler.settings")

import django
django.setup()

from scheduler.models import Appointment
from faker import Faker

fakegen = Faker()

def populate(N=5):
    for entry in range(N):
        fake_date = fakegen.date()
        fake_time = fakegen.time(pattern="%H:%M", end_datetime=None)
        fake_description = fakegen.text(max_nb_chars=200, ext_word_list=None)

        date = Appointment.objects.get_or_create(date=fake_date)[0]
        time = Appointment.objects.get_or_create(time=fake_time)[0]
        description = Appointment.objects.get_or_create(description=fake_description)[0]

if __name__ == '__main__':
    print("Populating DB")
    populate(5)
    print("Complete")