from django.contrib import admin
from .models import Inventory, Item, ItemInventory
# Register your models here.

admin.site.register(Inventory),
admin.site.register(Item),
admin.site.register(ItemInventory),
