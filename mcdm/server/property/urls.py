from django.urls import path, include
from .views import UserCreate, LoginView, LogoutView, UsernameCheck, GetData, GetRankData, Execute
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('signup/', UserCreate.as_view()),
    path('login/', LoginView.as_view()),
    path('logout/', LogoutView.as_view()),
    path('check_user/', UsernameCheck.as_view()),
    path('get_data/', GetData.as_view()),
    path('get_rank_data/', GetRankData.as_view()),
    path('execute/', Execute.as_view()),
]

