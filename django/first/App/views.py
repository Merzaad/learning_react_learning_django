from django.shortcuts import render, redirect
from django.contrib.auth.models import User, auth
from django.contrib import messages
from .models import swip
from .models import testimonial_section
from .models import about_section
def index(request):
    swp=swip()
    swp.name = 'Hello World'
    swp.text = "I'm working on this"
    return render(request,'index.html',{'swp':swp})
def services(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user= auth.authenticate(username=username,password=password)
        if user is not None:
            auth.login(request,user)
            return redirect ('/services')
        else:
            messages.info(request,'Invalid username or password')
            return redirect ('/accounts/login')
    else:
        return render(request,'services.html')
def about(request):
    abt=about_section.objects.get(id=1) #.all() complete table
    tsti1=testimonial_section()
    tsti1.name = 'Jean Paul'
    tsti1.jobtitle='Designer'
    tsti1.quote="I don't know him"
    tsti1.img='testimonials-4.jpg'
    tsti2=testimonial_section()
    tsti2.name = 'Bald Milsson'
    tsti2.jobtitle='CEO'
    tsti2.quote='Who the ef in the world?'
    tsti2.img='testimonials-1.jpg'
    tsts=[tsti1,tsti2]
    return render(request,'about.html',{'abt':abt,'tsts':tsts})