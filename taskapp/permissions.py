from rest_framework.permissions import BasePermission

class IsOwnerOrReadOnly(BasePermission):

    def has_object_permission(self,request,view,obj):

        if request.user.is_superuser:
            return True
        elif request.user.is_staff:
            if request.method in ["GET", "PUT", "PATCH"]:
                return True
            return False
        
        return obj.user ==request.user
    

    