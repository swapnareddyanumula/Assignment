let featuredposts = ["netflix", "movies", "shows", "series"]

let experience = ["2 years at l&t", "2.5 years at scoutbee"]

let education = ["b.tech", "inter", "10th"]

let skills = ["c language", "cpp language"]

console.log(featuredposts[3])
console.log(experience[0])
console.log(education[2])
console.log(skills[1])

console.log(skills.length)

let arry = ["Swapna", 28, true]

let cards = [6,9]
cards.push(7)
cards.push(8)
console.log(cards)

let colors = ["red", "green", "white"]
let newcolor = "yellow"
colors.push(newcolor)
console.log(colors)

colors.pop()
console.log(colors)

for (let count = 1; count < 11; count += 1)
{
    console.log(count)
}

for (let num = 10; num < 101; num +=10)
{
    console.log(num)
}

let arr = ["Banana", "apple", "orange", "kiwi", "pineapple"]
for ( let i = 0; i < 5; i += 1)
{
    console.log(arr[i])
}

let places = ["goa", "kerala", "mumbai", "bangalore", "hyderabad"]
for ( let i = 0; i < places.length; i += 1)
{
    console.log(places[i])
}

let card = [7, 3, 9, 4]
for (let i = 0; i < card.length; i++)
{
    console.log(card[i])
}

let player1time = 102
let player2time = 107
function getfastestracetime()
{
    if (player1time < player2time)
    {
        return player1time
    }
    else if (player2time < player1time)
    {
        return player2time
    }
    else 
    {
        return player1time
    }
}
let fastestrace = getfastestracetime()
console.log(fastestrace)


let racetime1 = 30
let racetime2 = 30
function totalrace()
{
    return racetime1 + racetime2
}
let totalracetime = totalrace()
console.log(totalracetime)

let randomnum = Math.random()
console.log(randomnum)

let randomnumber = Math.random() * 6
console.log(randomnumber)

let floorednumber = Math.floor(3.45632)
console.log(floorednumber)

let randnum = Math.floor(Math.random() * 6) 
console.log(randnum)

let randnu = Math.floor(Math.random() * 6) + 1
console.log(randnu)

function func()
{
    let rand = Math.floor(Math.random() * 13) + 1
    console.log("random")
    console.log(rand)
    if (rand ===1)
    {
        return 11
    }
    else if (rand > 10)
    {
        return 10
    }
    else {
        return rand
    }
}
let a = func()
console.log(a)

let course = true
let gcertificate = true
if (course === true && gcertificate === true)
{
    certificate()
}
function certificate ()
{
    console.log("generate certificate")
}

let challenge = false
let hints = false
if (challenge === false && hints === false)
{
    showsolution()
}
function showsolution()
{
    console.log("showing the solution")
}

let documentaries = true
let startups = false
if (documentaries === true || startups === true)
{
    movie()
}
function movie()
{
    console.log("hey, check out this movie")
}

let courses = {
    name: "CSS course",
    length: 60,
    lessons: 16,
    creator: "per",
    isfree: true
    tags: ["html", "css"]
}
console.log(courses.tags)

