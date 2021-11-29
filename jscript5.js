let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleel = document.getElementById("apple-el")
let orangeel = document.getElementById("orange-el")
function fruits()
{
    for (let i = 0; i < fruit.length; i++)
    {
        if(fruit[i] === "🍎")
        {
            appleel.textContent += fruit[i]
        }
        else
        {
            orangeel.textContent += fruit[i]
        }
    }
}
fruits()