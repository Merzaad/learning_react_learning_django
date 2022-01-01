from django.db import models

class swip:
    name : str
    text : str

class testimonial_section:
    name : str
    jobtitie : str
    quote : str
    img : str


class about_section(models.Model):
    text = models.TextField()
    intro = models.TextField()
    image = models.ImageField(upload_to ='Pictures')
    jobtitle = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    website = models.CharField(max_length=100)
    birthday = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    age =  models.CharField(max_length=100)
    degree = models.CharField(max_length=100)
    email =  models.CharField(max_length=100)
    freelance = models.BooleanField()
    sumsary = models.TextField()