from django.http import HttpResponse


def home(request):
    return HttpResponse("Hello, Django! CI/CD is ready.")
