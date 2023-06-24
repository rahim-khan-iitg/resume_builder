from django.urls import path
from . import views

urlpatterns=[
    path("",views.resume,name="resume"),
    path("go_to_education",views.go_to_education,name="education"),
    path("go_to_experience",views.go_to_experience,name="experience"),
    path("go_to_publications",views.go_to_publications,name="publications"),
    path("go_to_projects",views.go_to_projects,name="projects"),
    path("go_to_skills",views.go_to_skills,name="skills"),
    path("go_to_responsibility",views.go_to_responsibility,name="responsibility"),
    path("go_to_achievements",views.go_to_achievements,name="achievements"),
    path("go_to_course",views.go_to_course,name="course"),
    path("go_to_curriculars",views.go_to_curriculars,name="curriculars"),
    path("go_to_template",views.go_to_template,name="template"),
    path("build_resume",views.build_resume,name="build_resume"),
]