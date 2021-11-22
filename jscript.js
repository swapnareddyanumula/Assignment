let welcomedoc = document.getElementById("welcome")
let names = "Teena"
let greeting = "Welcome back "
welcomedoc.textContent= greeting+names

let countdoc = document.getElementById("countd")
let count = 0;

function increment()
{
    //count = count+1
    count+=1
    countdoc.textContent = count
    //document.getElementById("countd").innerText = count
}

let savedoc = document.getElementById("savepe")
function save()
{
    let pe = count + " - "
    savedoc.textContent += pe
    countdoc.textContent = 0
    count=0
}

