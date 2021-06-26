from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Profile, Property


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['id', 'user', 'address', 'user_type']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'first_name', 'last_name', 'email')
        extra_kwargs = {'password': {'write_only': True}}
    
    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User(
            username=validated_data.get('username'),
            first_name=validated_data.get('first_name'),
            last_name=validated_data.get('last_name'),
            email=validated_data.get('email')
            )
        user.set_password(password)
        user.is_active = False
        user.save()
        return user


class PropertySerializer(serializers.ModelSerializer):
    availablefrom = serializers.DateField()
    class Meta:
        model = Property
        fields = ('propertyname', 'propertyarea', 'propertyrent', 'propertydeposit',
        'propertymaintenancetype', 'propertytype', 'propertyfloor', 'propertyage', 'mobileno',
        'tenanttype','furnishingtype', 'availablefrom', 'parkingtype', 'propertydescription',
        'totalbeds', 'totalbathrooms' ,'totalbalcony', 'watersupplytype', 'gymstatus',
        'gatedsecuritystatus', 'propertystate', 'propertycity', 'amenities', 'status', 'lastmodified')

