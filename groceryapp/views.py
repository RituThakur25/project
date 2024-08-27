from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

# Create your views here.
def index(request):
    temp=loader.get_template("index.html")
    return HttpResponse(temp.render())


def about(request):
    temp=loader.get_template("about.html")
    return HttpResponse(temp.render())


def services(request):
    temp=loader.get_template("services.html")
    return HttpResponse(temp.render())


def categories(request):
    temp=loader.get_template("categories.html")
    return HttpResponse(temp.render())


def product(request):
    temp=loader.get_template("product.html")
    return HttpResponse(temp.render())


def blog(request):
    temp=loader.get_template("blog.html")
    return HttpResponse(temp.render())


def contact(request):
    temp=loader.get_template("contact.html")
    return HttpResponse(temp.render())

