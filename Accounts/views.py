from django.shortcuts import render, redirect
from django.contrib.auth.models import User, auth
from django.contrib import messages

def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user= auth.authenticate(username=username,password=password)
        if user is not None:
            auth.login(request,user)
            return redirect ('/')
        else:
            messages.info(request,'Invalid username or password')
            return redirect ('/accounts/login')
    else:
        return render(request,'login.html')

def signup(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password1 = request.POST['password1']
        password2 = request.POST['password2']
        agree_term = request.POST['agree-term']

        if password1==password2:
            if User.objects.filter(username=username).exists():
                messages.info(request,'Username is taken')
                print('Username is taken')
                return redirect ('/accounts/signup')
            elif User.objects.filter(email=email).exists():
                messages.info(request,'Email is taken')
                print('Email is taken')
                return redirect ('/accounts/signup')
            else:
                user=User.objects.create_user(username=username,password=password1,email=email)
                user.save()
                print('/')
                return redirect ('/')
        else:
            messages.info(request,'Passwords do not match')
            print("Password does not match")
            return redirect ('/accounts/signup')

    else:
        return render(request,'signup.html')

def logout(request):
    auth.logout(request)
    return redirect ('/')