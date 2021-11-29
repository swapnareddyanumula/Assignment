let person = {
    name: "swapna",
    age: 28,
    country: "india"
}
function logdata()
{
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}
logdata()


let age = 15
if (age < 6)
{
    console.log("Free")
}
else if (age < 18)
{
    console.log("child discount")
}
else if (age < 27)
{
    console.log("student discount")
}
else if (age < 67)
{
    console.log("full price")
}
else
{
    console.log("senior citizen discount")
}

let countries = ["china", "india", "USA", "indonesia", "pakistan"]
for (let i = 0; i < countries.length; i++)
{
    console.log(countries[i])
}

let largecountries = ["tuvalu", "india", "USA", "indonesia", "monaco"]
largecountries.pop()
largecountries.push("pakistan")
largecountries.shift()
largecountries.unshift("china")
console.log(largecountries)


let dayofmonth = 13
let weekday = "friday"
if (dayofmonth === 13 && weekday === "friday")
{
    console.log("😱")
}


let hands = ["rock", "paper", "scissor"]
function func()
{
    console.log(hands[Math.floor(Math.random() * 3)])
}
func()
