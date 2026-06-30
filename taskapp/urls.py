from django.urls import path,include
from rest_framework.routers  import DefaultRouter 
from .views import TaskViewSet
from .serializer import TaskSerializer

router = DefaultRouter()
router.register(r'taskapi',TaskViewSet,)

urlpatterns = [
    path("",include(router.urls)),
]