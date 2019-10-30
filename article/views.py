from django.shortcuts import render
from django.http import HttpResponse
from .models import Reporter

def reporter_name(request):
    reporter_list = Reporter.objects.all()

    context = {'reporter_list': reporter_list }

    if request.is_ajax():  # Ajax request 여부 확인
        return render(request, 'article/index.html', context)

        # return render(request, 'article/index.html', HttpResponse(json.dumps(context), content_type="application/json"))

    return render(request, 'article/index.html', context)

