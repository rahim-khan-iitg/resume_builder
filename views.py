from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def resume(request):
    return render(request,"personal_details.html")

@csrf_exempt
def go_to_education(request):
    return render(request,"education.html")

@csrf_exempt
def go_to_experience(request):
    return render(request,"experience.html")

@csrf_exempt
def go_to_publications(request):
    return render(request,"publication.html")

@csrf_exempt
def go_to_projects(request):
    return render(request,"projects.html")

@csrf_exempt
def go_to_skills(request):
    return render(request,"technical_skills.html")

@csrf_exempt
def go_to_responsibility(request):
    return render(request,"positions_responsibility.html")

@csrf_exempt
def go_to_achievements(request):
    return render(request,"achievements.html")

@csrf_exempt
def go_to_course(request):
    return render(request,"key_course_taken.html")

@csrf_exempt
def go_to_curriculars(request):
    return render(request,"extracurriculars.html")

@csrf_exempt
def go_to_template(request):
    return render(request,"template1.html")

@csrf_exempt
def build_resume(request):
    return render(request,"resume_template.html")