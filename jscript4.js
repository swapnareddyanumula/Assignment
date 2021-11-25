let sum = 0
let cards = []
let hasblackjack = false
let isalive = false
let message = ""
let gamemes = document.getElementById("gamemessage")
let sumel = document.getElementById("sum-el")
let cardsel = document.getElementById("cards-el")
let player = {name:"swapna", points:50}

playerel = document.getElementById("player-el")
playerel.textContent = player.name + ": $" + player.points

function getrandomcard()
{
    let randnum = Math.floor(Math.random() * 13) + 1
    if (randnum ===1)
    {
        return 11
    }
    else if (randnum > 10)
    {
        return 10
    }
    else {
        return randnum
    }
}

function startgame()
{
    isalive = true
    let firstcard = getrandomcard()
    let secondcard = getrandomcard()
    cards = [firstcard, secondcard]
    sum = firstcard + secondcard
    rendergame()
}

function rendergame()
{
    cardsel.textContent = "Cards: "
    for (i = 0; i < cards.length; i++)
    {
        cardsel.textContent += cards[i] + " "
    }
    sumel.textContent = "Sum: " + sum
    if (sum <= 20)
    {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21)
    {
        message = "You've got Blackjack"
        hasblackjack = true
    }
    else
    {
        message = "You're out of the game"
        isalive = false
    }
    gamemes.textContent = message
}

function newcard()
{
    if(isalive === true && hasblackjack === false)
    {
        let card = getrandomcard()
        sum += card
        cards.push(card)
        rendergame()
    }
}
