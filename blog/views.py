from django.shortcuts import render, get_object_or_404, get_list_or_404
from django.utils import timezone
from .models import Post, Comment, Category, Contributors
from .forms import PostForm, CommentForm
from django.shortcuts import redirect
from django.contrib.auth.decorators import login_required
from django.utils import translation
# Create your views here.
def post_list(request):
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request, 'blog/post_list.html', {'posts': posts})

def post_detail(request, pk):
    post = get_object_or_404(Post, pk=pk)
    return render(request, 'blog/post_detail.html', {'post': post})

@login_required
def post_new(request):
    if request.method == "POST":
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.save()
            return redirect('post_detail', pk=post.pk)
    else:
        form = PostForm()
    return render(request, 'blog/post_edit.html', {'form': form})

@login_required
def post_edit(request, pk):
    post = get_object_or_404(Post, pk=pk)
    if request.method == "POST":
        form = PostForm(request.POST, instance=post)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.save()
            return redirect('post_detail', pk=post.pk)
    else:
        form = PostForm(instance=post)
    return render(request, 'blog/post_edit.html', {'form': form})

@login_required
def post_draft(request):
    posts = Post.objects.filter(published_date__isnull=True).order_by('created_date')
    return render(request, 'blog/post_draft.html', {'posts': posts})

@login_required
def post_publish(request, pk):
    post = get_object_or_404(Post, pk=pk)
    post.publish()
    return redirect('post_detail', pk=pk)

@login_required
def post_remove(request, pk):
    post = get_object_or_404(Post, pk=pk)
    post.delete()
    return redirect('post_list')

def add_comment_to_post(request, pk):
    post = get_object_or_404(Post, pk=pk)
    if request.method == "POST":
        form = CommentForm(request.POST)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.post = post
            comment.save()
            return redirect('post_detail', pk=post.pk)
    else:
        form = CommentForm()
    return render(request, 'blog/add_comment_to_post.html', {'form': form})

@login_required
def comment_approve(request, pk):
    comment = get_object_or_404(Comment, pk=pk)
    comment.approve()
    return redirect('post_detail', pk=comment.post.pk)

@login_required
def comment_remove(request, pk):
    comment = get_object_or_404(Comment, pk=pk)
    comment.delete()
    return redirect('post_detail', pk=comment.post.pk)


def about_us(request):
    return render(request, 'blog/about_us.html')

def personajes(request):
    return render(request, 'blog/personajes.html')

def quiz(request):
    return render(request, 'blog/quiz.html')

def quotes(request):
    return render(request, 'blog/quotes.html')

def create(request):
    return render(request, 'blog/create.html')

def home(request):

    if translation.LANGUAGE_SESSION_KEY in request.session:

        del request.session[translation.LANGUAGE_SESSION_KEY]

    return render(request, 'blog/home.html')

def categorySelection(request):
    categories = Category.objects.all()
    context = {'categories' : categories}

    return render(request, 'blog/category_selection.html', context)

def CategoriesPost(request, category_id):
    category = get_object_or_404(Category, pk=category_id)
    posts = category.post_set.all()
    context = {'category' : category, 'posts' : posts}
    return render(request,'blog/categories_post.html', context)

def base_curriculums(request, name):
    contributors = get_object_or_404(Contributors, name=name)
    context = {'contributor': contributors}
    return render(request, 'blog/base_curriculums.html', context)
