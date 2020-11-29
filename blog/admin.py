from django.contrib import admin
from .models import Post, Comment, Category,Contributors

admin.site.register(Post)
admin.site.register(Comment)
admin.site.register(Category)
admin.site.register(Contributors)
