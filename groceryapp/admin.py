from django.contrib import admin
from .models import mamber
# Register your models here.
class newadd(admin.ModelAdmin):
    list_display = ("id","name")
admin.site.register(mamber,newadd)    


