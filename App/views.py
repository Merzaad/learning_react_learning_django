from django.shortcuts import render
from .models import swip
from .models import about_section
from .models import testimonial_section
def index(request):
    swp=swip()
    swp.name = 'Pouya Hosseini'
    swp.text = "I'm working on this"
    return render(request,'index.html',{'swp':swp})
def services(request):
    return render(request,'services.html',) #{'in_html':in_def}
def about(request):
    abt=about_section()
    abt.text="Hello, my name is Mehrzad. I'm currently working on this"
    abt.intro="I'm learning django"
    abt.jobtitle="Petroleum Engineering"
    abt.birthday="27 Nov 1995"
    abt.website="www.linkedin.com/in/merzaad"
    abt.phone='09221087066'
    abt.city='Karaj'
    abt.age='26'
    abt.degree='Bachelor'
    abt.email='merzaad@gmail.com'
    abt.freelance='Available'
    abt.summary='no summary'
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

    return render(request,'about.html',{'tsts':tsts,'abt':abt})