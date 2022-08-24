from django.contrib import admin

from school_garden.models import School, Volunteer

# Register your models here.
admin.site.register(Volunteer)
admin.site.register(School)