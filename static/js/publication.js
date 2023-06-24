function add() {
    let title = document.getElementById('title')
    let mentor = document.getElementById('mentor')
    let journal = document.getElementById('journal')
    let link = document.getElementById('link')
    let table = document.getElementById('table');
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0)
    cell1.setAttribute("contenteditable", "true")
    let cell2 = row.insertCell(1)
    cell2.setAttribute("contenteditable", "true")
    let cell3 = row.insertCell(2)
    cell3.setAttribute("contenteditable", "true")
    let cell4 = row.insertCell(3)
    cell4.setAttribute("contenteditable", "true")
    let cell5 = row.insertCell(4)
    cell1.innerHTML = title.value
    cell2.innerHTML = mentor.value
    cell3.innerHTML = journal.value
    cell4.innerHTML = link.value
    let button2 = document.createElement('button')
    button2.innerText = 'Delete'
    button2.setAttribute("class", "btn btn-danger")
    button2.setAttribute("onclick", "deleteRow(this)")
    cell5.appendChild(button2)
    title.value = null
    mentor.value = null
    journal.value = null
    link.value = null
}
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
}
function save()
{
    let table=document.getElementById("table")
    let trs=table.getElementsByTagName('tr')
    let data=[]
    for(let i=1;i<trs.length;i++)
    {
        let tds=trs[i].getElementsByTagName('td')
        row=[]
        for(let j=0; j<tds.length-1;j++)
        {
            row.push(tds[j].innerText)
        }
        data.push(row)
    }
    localStorage.setItem('publication',JSON.stringify(data))
}