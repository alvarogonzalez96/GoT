from django.db import models
from django.utils import timezone
from ckeditor.fields import RichTextField

class Category(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Post(models.Model):
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, default='Character')
    title = models.CharField(max_length=200)
    text = RichTextField()
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

    def approved_comments(self):
        return self.comments.filter(approved_comment=True)


class Comment(models.Model):
    post = models.ForeignKey('blog.Post', on_delete=models.CASCADE, related_name='comments')
    author = models.CharField(max_length=200)
    text = RichTextField()
    created_date = models.DateTimeField(default=timezone.now)
    approved_comment = models.BooleanField(default=False)

    def approve(self):
        self.approved_comment = True
        self.save()

    def __str__(self):
        return self.text

class Contributors(models.Model):
    name = models.CharField(max_length=200)
    surnames = models.CharField(max_length=200)
    age = models.IntegerField()
    residence = models.CharField(max_length=200)
    movile = models.IntegerField()
    email = models.EmailField(max_length=254)
    profile = models.CharField(max_length=200)
    academic = models.CharField(max_length=200)
    github = models.CharField(max_length=200)