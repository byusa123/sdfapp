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
            response="CON welcome to idatechnology ussd app\n"
            response +="1.Girls in code \n"
            response +="2.sdf program "
        elif text=='1':
            response="CON welcome to girls in code program\n"
            response+="1.join the program\n"
            response+="2.get activity \n" 
            response+="3.leave \n"
            
             
        elif text=='1*1':
            response="CON Enter your name"
        elif text=='1*2':
            response="CON Enter your pincode"
        elif text=='1*3':
            response="CON Enter your name"
            
        elif text=='2':
            response="CON welcome to girls in code program\n"
            response+="1.join the program\n"
            response+="2.get activity \n" 
            response+="3.leave"
              
             
             
            
        else:
            response="END invalid choice"
        return HttpResponse(response)
    
    
    return HttpResponse('welcome')
