from django.shortcuts import render
from.models import individual

def tbl(request):
    tbl=individual.objects.all()
    return render(request, 'table.html',{'tbl':tbl})