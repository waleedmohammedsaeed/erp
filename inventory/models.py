from django.db import models
from django.core.validators import MinValueValidator
# Create your models here.

class Inventory(models.Model):
    AREASIZE = [
        ('sm', 'small'),
        ('md', 'middle'),
        ('lg', 'large'),
    ]
    name = models.CharField(max_length=50, unique=True)
    location = models.CharField(max_length=30)
    code = models.CharField(max_length=10, unique=True)
    area = models.CharField(max_length=2, choices=AREASIZE)
    inService = models.BooleanField(default=True)

    def __str__(self):
        return self.name

class Item(models.Model):
    PIECE = (
        ("P", "وحدة"),
        ("W", "وزن"),
        ("B", "صندوق"),
    )
    itemName = models.CharField(max_length=50, unique=True)
    inventory = models.ForeignKey("inventory.Inventory", null=True, on_delete=models.SET_NULL)
    unit = models.CharField(max_length=8, choices=PIECE)  # piece/set/box ...
    price = models.DecimalField(max_digits=12, decimal_places=2)
    discount = models.SmallIntegerField(default=0)
    def __str__(self):
        return self.itemName

    class Meta:
        db_table = ''
        managed = True
        verbose_name = 'Item'
        verbose_name_plural = 'Items'

class ItemInventory(models.Model):
    item = models.ForeignKey("inventory.Item", on_delete=models.CASCADE)
    qty = models.IntegerField(validators=[MinValueValidator(0)])
    qtyOnHand = models.IntegerField(validators=[MinValueValidator(0)])

    def __str__(self):
        return self.item
    
    def get_total_price(self):
        self.price * self.qty
    class Meta:
        db_table = ''
        managed = True
        verbose_name = 'ItemInventory'
        verbose_name_plural = 'ItemInventorys'

