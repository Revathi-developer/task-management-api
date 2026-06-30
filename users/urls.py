from django.urls import path
from .views import *

urlpatterns = [
    path("register/", RegisterAPIView.as_view(), name="register"),
    path("profile/", ProfileAPIView.as_view(), name="profile"),
    path("changepassword/", ChangePasswordAPIView.as_view(), name="changepassword"),
    path("updateprofile/",UpdateProfileAPIView.as_view(),name='updateprofile')
]





