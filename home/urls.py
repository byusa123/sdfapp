from django.urls import path
from .import views
from django.conf import settings
from django.conf.urls.static import static
from .views import *

urlpatterns=[
    path('',views.welcome, name='home'),
    
    path('ussdapp/',views.ussdapp, name='ussdapp'),
    path('registration/', views.registration, name='registration'),
    path('<int:id>/deleteInfos/',views.delreg, name='deleteInfos'),
    path('<int:id>/updateInfos/',views.updatereg, name='updateInfos'),
    path('reg/endpoints/', views.registerEndpoint, name='endpionts'),
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)