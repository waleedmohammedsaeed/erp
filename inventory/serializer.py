from rest_framework import serializers
from inventory.admin import Inventory

class  InventorySerializer(serializers.ModelSerializer):
    class Meta:
        model= Inventory
        fields = '__all__'