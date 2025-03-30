from django.urls import path
from .views import create_user, get_all_users

urlpatterns = [
    path("users/", get_all_users, name="get-all-users"),
    path("create/", create_user, name="create-user"),
]
