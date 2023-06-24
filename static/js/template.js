function generate() {
    // personal data
    let personal = JSON.parse(localStorage.getItem("personal"))
    let name = document.getElementById('contentName')
    name.textContent = personal['name']
    let roll_no = document.getElementById('contentRoll')
    roll_no.textContent = "Roll No: " + personal['roll_no']
    let course = document.getElementById("contentCourse")
    course.textContent = personal['degree'] + "-" + personal['branch']
    let mob = document.getElementById("mob")
    mob.textContent = personal['contact']
    let email = document.getElementById("email")
    email.textContent = personal["email"]
    let iitgemail = document.getElementById("iitgemail")
    iitgemail.textContent = personal['iitg_mail']
    let linkedIn = document.getElementById('contactLink1')
    linkedIn.textContent = personal['linkedIn']
    let github = document.getElementById('contactLink2')
    github.textContent = personal['github']
    // education
    let education = JSON.parse(localStorage.getItem("education"))
    let table = document.getElementById("educationTable")
    for (let i = 0; i < education.length; i++) {
        let row = table.insertRow(1)
        for (let j = 0; j < education[0].length; j++) {
            let cell1 = row.insertCell(j)
            cell1.setAttribute("class", "text-center")
            cell1.innerHTML = education[i][j]
        }
    }
    //experience
    if (localStorage.getItem("experience") != null) {
        let experience = JSON.parse(localStorage.getItem("experience"))
        let exp_list = document.getElementById("experience")
        for (let i = 0; i < experience.length; i++) {
            let li = document.createElement('li')
            let div1 = document.createElement('div')
            let div2 = document.createElement('div')
            li.appendChild(div1)
            li.appendChild(div2)
            let div11 = document.createElement('div')
            div11.setAttribute("class", "title")
            div11.textContent = experience[i][0]
            div1.appendChild(div11)
            let div12 = document.createElement('div')
            div12.setAttribute("class", "time right")
            div12.textContent = experience[i][2]
            div1.appendChild(div12)
            let div21 = document.createElement('div')
            div21.setAttribute("class", "link right")
            div21.textContent = experience[i][3]
            div2.appendChild(div21)
            let div22 = document.createElement('div')
            div22.setAttribute("class", "text")
            div22.textContent = experience[i][1]
            div2.appendChild(div22)
            exp_list.appendChild(li)
        }
    }
    else {
        let section = document.getElementById("sectionExperience")
        section.setAttribute("hidden", "true")
    }
    // publications
    if (localStorage.getItem("publication") != null) {
        let publications = JSON.parse(localStorage.getItem('publication'))
        let pub_list = document.getElementById('publications')
        for (let i = 0; i < publications.length; i++) {
            let li = document.createElement('li')
            let div1 = document.createElement('div')
            let div2 = document.createElement('div')
            li.appendChild(div1)
            li.appendChild(div2)
            let div11 = document.createElement('div')
            div11.setAttribute("class", "title")
            div11.textContent = publications[i][0]
            div1.appendChild(div11)
            let div12 = document.createElement('div')
            div12.setAttribute("class", "time right")
            div12.textContent = publications[i][2]
            div1.appendChild(div12)
            let div21 = document.createElement('div')
            div21.setAttribute("class", "link right")
            div21.textContent = publications[i][3]
            div2.appendChild(div21)
            let div22 = document.createElement('div')
            div22.setAttribute("class", "text")
            div22.textContent = publications[i][1]
            div2.appendChild(div22)
            pub_list.appendChild(li)
        }
    }
    else {
        let section = document.getElementById("sectionPublications")
        section.setAttribute("hidden", "true")
    }
    // projects
    if (localStorage.getItem('projects') != null) {
        let projects = JSON.parse(localStorage.getItem('projects'))
        let proj_list = document.getElementById("projects")
        for (let i = 0; i < projects.length; i++) {
            let li = document.createElement('li')
            let div1 = document.createElement('div')
            let div2 = document.createElement('div')
            li.appendChild(div1)
            li.appendChild(div2)
            let div11 = document.createElement('div')
            div11.setAttribute("class", "title")
            div11.textContent = projects[i][0]
            div1.appendChild(div11)
            let div12 = document.createElement('div')
            div12.setAttribute("class", "time right")
            div12.textContent = projects[i][2]
            div1.appendChild(div12)
            let div21 = document.createElement('div')
            div21.setAttribute("class", "link right")
            div21.textContent = projects[i][4]
            div2.appendChild(div21)
            let div22 = document.createElement('div')
            div22.setAttribute("class", "text")
            div22.textContent = projects[i][1]
            div2.appendChild(div22)
            proj_list.appendChild(li)
        }
    }
    else {
        let section = document.getElementById("sectionProjects")
        section.setAttribute("hidden", "true")
    }
    //skills
    if (localStorage.getItem("tech_skills") != null) {
        let skills = JSON.parse(localStorage.getItem('tech_skills'))
        let skills_list = document.getElementById("skills")
        for (let i = 0; i < skills.length; i++) {
            let li = document.createElement('li')
            let strong = document.createElement('strong')
            let span1 = document.createElement('span')
            let span2 = document.createElement('span')
            span1.setAttribute("class", "skillCategory")
            span1.textContent = skills[i][0]
            strong.appendChild(span1)
            span2.textContent = ": "
            strong.appendChild(span2)
            li.appendChild(strong)
            let span3 = document.createElement('span')
            span3.textContent = skills[i][1]
            li.appendChild(span3)
            skills_list.appendChild(li)
        }
    }
    else {
        let section = document.getElementById("sectionSkills")
        section.setAttribute("hidden", "true")
    }
    //positions and responsibility
    if (localStorage.getItem('positions') != null) {

        let positions = JSON.parse(localStorage.getItem("positions"))
        let pos_list = document.getElementById("position")
        for (let i = 0; i < positions.length; i++) {
            let li = document.createElement("li")
            li.textContent = positions[i]
            pos_list.appendChild(li)
        }
    }
    else {
        let section = document.getElementById("sectionResponsibility")
        section.setAttribute("hidden", "true")
    }
    // achievements
    if (localStorage.getItem("achievements") != null) {
        let achievements = JSON.parse(localStorage.getItem("achievements"))
        let ach_list = document.getElementById("achievements")
        for (let i = 0; i < achievements.length; i++) {
            let li = document.createElement("li")
            let span1 = document.createElement("span")
            span1.setAttribute("class", "title")
            span1.textContent = achievements[i][0]
            let span2 = document.createElement("span")
            span2.setAttribute("class", "text")
            span2.textContent = achievements[i][1]
            li.appendChild(span1)
            li.appendChild(span2)
            ach_list.appendChild(li)
        }
    }
    else {
        let section = document.getElementById("sectionAchievements")
        section.setAttribute("hidden", "true")
    }
    //key course Taken
    if (localStorage.getItem("key_course")) {
        let courses = JSON.parse(localStorage.getItem('key_course'))
        let list = document.getElementById("row")
        for (let i = 0; i < courses.length; i = i + 3) {
            let div = document.createElement('div')
            div.setAttribute("class", "col-sm-6")
            let li1 = document.createElement("li")
            let li2 = document.createElement("li")
            let li3 = document.createElement("li")
            if(courses[i+0]!=undefined)
            {
                li1.textContent = courses[i + 0][0]
            }
            if(courses[i+1]!=undefined)
            {
                li2.textContent = courses[i + 1][0]
            }
            if(courses[i+2]!=undefined)
            {
                li3.textContent = courses[i + 2][0]
            }
            
            div.appendChild(li1)
            div.appendChild(li2)
            div.appendChild(li3)
            list.appendChild(div)
        }
    }
    else {
        let section = document.getElementById("sectionCourses")
        section.setAttribute("hidden", "true")
    }
    // extra curricular
    if (localStorage.getItem("extracurriculars")) {
        let curricular = JSON.parse(localStorage.getItem("extracurriculars"))
        let curricular_list = document.getElementById("curricular")
        for (let i = 0; i < curricular.length; i++) {
            let li = document.createElement('li')
            let span1 = document.createElement("span")
            let span2 = document.createElement("span")
            span1.setAttribute("class", "title")
            span2.setAttribute("class", "text")
            span1.textContent = curricular[i][0] + " :"
            span2.textContent = curricular[i][1]
            li.appendChild(span1)
            li.appendChild(span2)
            curricular_list.appendChild(li)
        }
    }
    else {
        let section = document.getElementById("sectionCurricular")
        section.setAttribute("hidden", "true")
    }
}
const el = document.getElementById("aTag");
el.addEventListener("click", () => { window.print();});