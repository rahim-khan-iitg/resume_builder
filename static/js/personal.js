function save()
        {
            localStorage.clear()
            let name=document.getElementById('name')
            let roll_no=document.getElementById('roll_no')
            let degree=document.getElementById("degree")
            let branch=document.getElementById("branch")
            let contact=document.getElementById("contact")
            let email=document.getElementById("email")
            let iitg_email=document.getElementById("iitg_mail")
            let linkedIn=document.getElementById("linkedIn")
            let github =document.getElementById("github")
            localStorage.setItem("personal",JSON.stringify({"name":name.value,"roll_no":roll_no.value,"degree":degree.value,"branch":branch.value,"contact":contact.value,"email":email.value,"iitg_mail":iitg_email.value,"linkedIn":linkedIn.value,"github":github.value}))
        }