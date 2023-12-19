from django.shortcuts import render
from django.http import request, JsonResponse
from .models import Inventory
from .serializer import InventorySerializer

def inventorydash(request):
    return render(request, 'inventoydash.html')

def inventories(request):
    inventories = Inventory.objects.all()
    ser = InventorySerializer(inventories, many=True)
    return JsonResponse({'inventories': ser.data})

