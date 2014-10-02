from django.contrib.auth.decorators import login_required
from splunkdj.decorators.render import render_to

@render_to('myzaim:home.html')
@login_required
def home(request):
    return {
        "message": "Hello World from myzaim!",
        "app_name": "myzaim"
    }