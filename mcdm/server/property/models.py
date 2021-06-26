from django.db import models
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.contrib.auth.models import User
import os


class Property(models.Model):
    propertyname = models.CharField(db_column='propertyName', max_length=100)  # Field name made lowercase.
    propertyarea = models.FloatField(db_column='propertyArea', blank=True, null=True)  # Field name made lowercase.
    propertyrent = models.IntegerField(db_column='propertyRent')  # Field name made lowercase.
    propertydeposit = models.IntegerField(db_column='propertyDeposit')  # Field name made lowercase.
    propertymaintenancetype = models.CharField(db_column='propertyMaintenanceType', max_length=20)  # Field name made lowercase.
    propertytype = models.CharField(db_column='propertyType', max_length=20)  # Field name made lowercase.
    propertyfloor = models.IntegerField(db_column='propertyFloor')  # Field name made lowercase.
    propertyage = models.CharField(db_column='propertyAge', max_length=15)  # Field name made lowercase.
    mobileno = models.CharField(db_column='mobileNo', max_length=15)  # Field name made lowercase.
    tenanttype = models.CharField(db_column='tenantType', max_length=10)  # Field name made lowercase.
    furnishingtype = models.CharField(db_column='furnishingType', max_length=15)  # Field name made lowercase.
    availablefrom = models.DateField(db_column='availableFrom')  # Field name made lowercase.
    parkingtype = models.CharField(db_column='parkingType', max_length=20)  # Field name made lowercase.
    propertydescription = models.CharField(db_column='propertyDescription', max_length=100)  # Field name made lowercase.
    totalbeds = models.IntegerField(db_column='totalBeds')  # Field name made lowercase.
    totalbathrooms = models.IntegerField(db_column='totalBathrooms')  # Field name made lowercase.
    totalbalcony = models.IntegerField(db_column='totalBalcony')  # Field name made lowercase.
    watersupplytype = models.CharField(db_column='waterSupplyType', max_length=20)  # Field name made lowercase.
    gymstatus = models.CharField(db_column='gymStatus', max_length=10)  # Field name made lowercase.
    gatedsecuritystatus = models.CharField(db_column='gatedSecurityStatus', max_length=10)  # Field name made lowercase.
    propertystate = models.CharField(db_column='propertyState', max_length=30)  # Field name made lowercase.
    propertycity = models.CharField(db_column='propertyCity', max_length=30)  # Field name made lowercase.
    amenities = models.IntegerField(blank=True, null=True)
    status = models.IntegerField()
    lastmodified = models.DateTimeField(db_column='lastModified')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'property'


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='user_profile')
    address = models.CharField(max_length=125, default='')
    user_type = models.CharField(max_length=1, default='1')


@receiver(models.signals.post_delete, sender=Profile)
def auto_delete_file_on_delete(sender, instance, **kwargs):
    if instance.image:
        if os.path.isfile(instance.image.path):
            os.remove(instance.image.path)


@receiver(models.signals.pre_save, sender=Profile)
def auto_delete_file_on_change(sender, instance, **kwargs):
    if not instance.pk:
        return False
    try:
        old_file = Profile.objects.get(pk=instance.pk).image
    except Profile.DoesNotExist:
        return False
    if not old_file == 'icons/default.png':
        if os.path.isfile(old_file.path):
            os.remove(old_file.path)

