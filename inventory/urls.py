from django.urls import path
from . import views

urlpatterns = [
    path("", views.inventorydash, name='inventorydash'),
    path("inventories/", views.inventories, name='inventories'),
]
