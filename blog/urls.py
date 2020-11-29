from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('post/<int:pk>/', views.post_detail, name='post_detail'),
    path('post/new/', views.post_new, name='post_new'),
    path('post/<int:pk>/edit/', views.post_edit, name='post_edit'),
    path('drafts/', views.post_draft, name='post_draft'),
    path('post/<pk>/publish/', views.post_publish, name='post_publish'),
    path('post/<pk>/remove/', views.post_remove, name='post_remove'),
    path(r'^post/(?P<pk>\d+)/comment/$', views.add_comment_to_post, name='add_comment_to_post'),
    path(r'^comment/(?P<pk>\d+)/approve/$', views.comment_approve, name='comment_approve'),
    path(r'^comment/(?P<pk>\d+)/remove/$', views.comment_remove, name='comment_remove'),
    path('about_us/', views.about_us, name='about_us'),
    path('personajes/', views.personajes, name='personajes'),
    path('quiz/', views.quiz, name='quiz'),
    path('quotes/', views.quotes, name='quotes'),
    path('post_list/', views.post_list, name='post_list'),
    path('categorySelection/', views.categorySelection, name ='categorySelection'),
    path('category/<int:category_id>/posts', views.CategoriesPost, name='CategoriesPost'),
    path('about_us/<str:name>', views.base_curriculums, name='curriculum'),
]
