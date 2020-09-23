from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
import africastalking
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
username="byusagisele@gmail.com"
api_key="a7b5f2d12f98b93a5448b421af86beacbf4fe8b8f0764a55ca4c3bb23d2a5f16"
africastalking.initialize(username, api_key)

def welcome(request):
    return render(request,'index.html')


@csrf_exempt
def ussdapp(request):
    
    if request.method =='POST':
        ##mandatory
        session_Id = request.POST.get("sessionId")
        service_code = request.POST.get("serviceCode")
        phone_number = request.POST.get("phoneNumber")
        text = request.POST.get("text")
        level = text.split("*")
        response=""
        if text=='':
            response="CON welcome to gofundme ussd app\n"
            response +="1.compains \n"
            response +="2.categories "
        elif text=='1':
            response="CON welcome to compaigns\n"
            response+="1.trending\n"
            response+="2.latest\n" 
            response+="3.leave \n"
            
             
      
        
            
        elif text=='2':
            response="CON welcome to categories\n"
            response+="1.business\n"
            response+="2.community \n"
            response+="3.education\n"
            response+="4.emergency \n"
            response+="5.businessevents\n"
            response+="6.medical\n"
            response+="7.non profite\n"
            response+="8.memorial\n" 
            response+="9.leave\n"
            response+="10.leave"
              
             
             
            
        else:
            response="END invalid choice"
        return HttpResponse(response)
    
    
    return HttpResponse('welcome')
 
