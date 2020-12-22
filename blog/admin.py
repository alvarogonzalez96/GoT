from django.contrib import admin
from .models import Post, Comment, Category,Contributors

class CommentInline(admin.StackedInline):
    model = Comment
    extra = 2

class PostAdmin(admin.ModelAdmin):
    inlines = [CommentInline]
    list_display = ('title','created_date', 'published_date')

admin.site.register(Post, PostAdmin)
admin.site.register(Comment)
admin.site.register(Category)
admin.site.register(Contributors)
