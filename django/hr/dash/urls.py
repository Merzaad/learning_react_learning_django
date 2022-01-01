from django.urls import path
from . import views

urlpatterns = [
    path('', views.tbl, name='table'),
]