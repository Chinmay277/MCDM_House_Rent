from .models import Profile, Property
from .serializers import ProfileSerializer, UserSerializer, PropertySerializer
from django.shortcuts import get_object_or_404, get_list_or_404
from rest_framework import viewsets
from rest_framework.generics import CreateAPIView, RetrieveAPIView, ListCreateAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.parsers import JSONParser
from django.contrib.auth.models import User, AnonymousUser
from django.contrib.auth.hashers import check_password
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.serializers import AuthTokenSerializer
from django.contrib.auth import login
from django.contrib.auth import authenticate
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.decorators import api_view, permission_classes
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
    HTTP_200_OK,
)
from .auth import is_token_expired,token_expire_handler, expires_in
from django.core.mail import send_mail
from django_otp.oath import hotp
from django.conf import settings
import json
from django.core import serializers
from .main import *
from django.db import connection
import traceback
import sys


class Execute(CreateAPIView):
    permission_classes = (AllowAny, )
    def create(self, request):
        cursor = connection.cursor()
        cursor.execute(request.data.get('query'))
        result = cursor.fetchall()
        print(len(result))
        return Response({'result' : result})


class GetData(CreateAPIView):
    permission_classes = (AllowAny, )
    def create(self, request):
        try:
            data = Property.objects.all()
            #data = data.values_list()
            print("l = ", len(data))
            return Response({'detail' : 'OK', 'data': data.values_list()})
        except Exception as e:
            print(e)
            lg =  open('server_log.log', 'a+')
            lg.write("-"*15+'\n')
            lg.write("-"*15+'\n')
            lg.write("get_data")
            lg.write("-"*15+'\n')
            lg.write("-"*15+'\n')
            traceback.print_exception(*sys.exc_info(), file=lg)
            lg.write("-"*10+'\n')
            lg.write("-"*10+'\n')
            lg.write(repr(request.data)+'\n'*5)
            lg.close()

            return Response('systemError')


class GetRankData(CreateAPIView):
    permission_classes = (AllowAny, )
    def create(self, request):
        print(request.data)
        print(request.data.get('types', False))
        print(request.data.get('mat', False))
        try:
            if request.data.get('all', False):
                data = Property.objects.all().values_list()
                l = len(data)
                print("l = ", l)
                return Response({'detail' : 'OK', 'data': data})
            else:
                lst = ['rent_min', 'rent_max', 'deposit_min', 'deposit_max', 'floor_min', 'floor_max']
                lst1 = ['propertyrent__gte', 'propertyrent__lte',
                        'propertydeposit__gte', 'propertydeposit__lte',
                        'propertyfloor__gte', 'propertyfloor__lte',
                        'propertytype']
                data = []
                types = []
                data_location = []
                if not request.data.get('types', False):
                    types = [[1, 1], [2, 1], [3, 1], [4, 1], [5, 1]]
                if not request.data.get('mat', False):
                    mat = [1, 1, 1, 1, 1, 1]
                #return Response({'details': 'choose type of property'})
                for pt in request.data.get('types'):
                    kwargs = {}
                    for i in range(len(lst)):
                        if request.data.get(lst[i], False):
                            kwargs[lst1[i]] = request.data.get(lst[i])
                    
                    kwargs[lst1[-1]] = pt[0]
                    tmp = Property.objects.filter(**kwargs)
                    data_location += [[d[0], d[1], pt[1], d[3]] for d in 
                    tmp.values_list('propertyrent', 'propertydeposit', 'propertytype', 'propertyfloor')]
                    data += list(tmp.values_list())
                mt = request.data.get('mat')
                mat = [
                    [1,          mt[0],      mt[1],      mt[2]],
                    [1/mt[0],    1,          mt[3],      mt[4]],
                    [1/mt[1],    1/mt[3],    1,          mt[5]],
                    [1/mt[2],    1/mt[4],    1/mt[5],    1]]
                ranks = []
                if data_location:
                    ranks = ahp(data_location=data_location, mat=mat)
                print("l = ", type(data))
                print("integreted : ", data[0] if data != [] else "no data", ranks[0] if ranks != [] else "no ranks")
            return Response({'detail' : 'OK', 'result': [data[i] + (ranks[i],) for i in range(len(data))]})
        except Exception as e:
            print(e)
            lg =  open('server_log.log', 'a+')
            lg.write("-"*15+'\n')
            lg.write("-"*15+'\n')
            lg.write("-"*15+'\n')
            traceback.print_exception(*sys.exc_info(), file=lg)
            lg.write("-"*10+'\n')
            lg.write("-"*10+'\n')
            lg.write(repr(request.data)+'\n'*5)
            lg.close()

            return Response('systemError')


class UserCreate(CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny, )


    def create(self, request):
        user = UserSerializer(data = {
            'username' : request.data.get('username'),
            'password' : request.data.get('password'),
            'first_name' : request.data.get('first_name'),
            'last_name' : request.data.get('last_name'),
            'email' : request.data.get('email')
        })
        if user.is_valid():
            user.save()
        else:
            return Response({'detail': 'user_problem'})
        user = User.objects.get(username__exact=request.data.get('username'))
        print(user)

        profile = ProfileSerializer(data = {
                'user' : user.pk,
                'address': request.data.get('address'),
                'user_type' : request.data.get('user_type')
        })
        if profile.is_valid():
            profile.save()
        else:
            return Response({'detail': 'profile_problem'}) 

        return Response({'detail' : 'OK!'})


class UsernameCheck(CreateAPIView):
    permission_classes = (AllowAny,)
    def create(self, request):
        print(request.data)
        if User.objects.filter(username__exact=request.data.get('username')).exists():
            return Response({'status' : 'EXISTS'})
        return Response({'status' : 'OK'})


class LoginView(CreateAPIView):
    permission_classes = (AllowAny,)
    def create(self, request):
        try:
            user =  User.objects.filter(username__exact=request.data.get('username')).exists()
            if not user:
                return Response({'detail': 'user is not registred!'}, status=HTTP_200_OK)
            
            user = User.objects.get(username__exact=request.data.get('username'))
            if not user.check_password(request.data.get('password')):
                return Response({'detail': 'wrong password!'}, status=HTTP_200_OK)
            
            return Response({'detail':'OK!', 'token': str(token), 'user_type' : profile.user_type, 'user' : user.username})
        except Exception as e:
            print('error1 : ', e)
            return Response({'status':'SystemError'})


class LogoutView(CreateAPIView):
    permission_classes = (IsAuthenticated,)
    def create(self, request):
        token = Token.objects.get(user__exact = request.user)
        token.delete()
        return Response({'status' : 'OK'})


