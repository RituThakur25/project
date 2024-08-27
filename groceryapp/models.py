from django.db import models

# Create your models here.
class mamber(models.Model):
    name = models.CharField(max_length=30)
    email = models.CharField(max_length=50)
    message = models.CharField(max_length=50)
