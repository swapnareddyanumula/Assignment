let firstcard = 4
let secondcard = 9
let sum = firstcard + secondcard
let hasblackjack = false
let isalive = true
let message = ""
let gamemes = document.getElementById("gamemessage")

function startgame()
{
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
