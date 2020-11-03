from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
import africastalking
from  .models import *
from .serializers import*
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser


username="byusagisele@gmail.com"
api_key="a7b5f2d12f98b93a5448b421af86beacbf4fe8b8f0764a55ca4c3bb23d2a5f16"
africastalking.initialize(username, api_key)
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response




class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email
        })

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
def registration(request):
    select =Registration.objects.all().order_by('-id')
    if request.method=='POST':
        phone = request.POST['phone']
        Firstname = request.POST['Firstname']
        Lastname = request.POST['Lastname']
        dsc='erttt'
        insert= Registration(phone=phone,Firstname=Firstname,Lastname=Lastname,description=dsc)
        try:
           insert.save()
           return render(request,'register.html', {'message':'data has been  inserted successful','data':select})    

        except:
           return render(request, 'register.html',{'message':'failed to insert','data':select})
        
    return render(request, 'register.html',{'data':select})
def delreg(request,id):
    select =Registration.objects.all().order_by('-id')
    deleteInfos=Registration.objects.get(id=id).delete()
    return render(request, 'register.html', {'data':select})

def updatereg(request,id):
    select =Registration.objects.all().order_by('-id')
    update=Registration.objects.get(id=id)
    if request.method=='POST':
        update.phone=request.POST['phone']
        update.Firstname=request.POST['Firstname']
        update.Lastname=request.POST['Lastname']
        try:
            update.save()
            return render(request, 'updateregister.html', {'data':select,'update':update})
        except:
             return render(request, 'updateregister.html', {'data':select,'update':update})
         
#Biulidng our End point 
@csrf_exempt
def registerEndpoint(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        reg = Registration.objects.all()
        serializer = RegisterSerializer(reg, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request) #request.data
        serializer = RegisterSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

     
     #delete/put/ get sigle data  
     
@csrf_exempt
def deleteEndpoint(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        reg = Registration.objects.all()
        serializer = RegisterSerializer(reg, many=False)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'DELETE':
        data = JSONParser().parse(request) #request.data
        serializer = RegisterSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
  
    
