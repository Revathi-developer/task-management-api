from django.urls import path
from .views import *

urlpatterns = [
    path("register/", RegisterAPIView.as_view(), name="register"),
    path("profile/", ProfileAPIView.as_view(), name="profile"),
    path("change-password/", ChangePasswordAPIView.as_view(), name="changepassword"),
   
]





