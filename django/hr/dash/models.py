from django.db import models

class individual (models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    jobtitle = models.CharField(max_length=100)
    education = models.CharField(max_length=100)
