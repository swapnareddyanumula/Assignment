let num1 = 8
let num2 = 2
document.getElementById("firstnum").textContent = num1
document.getElementById("secondnum").textContent = num2
let value = document.getElementById("sum")
function add()
{
    value.textContent = "Sum: " + (num1 + num2)
}
function subtract()
{
    value.textContent = "Sum: " + (num1 - num2)
}
function multiply()
{
    value.textContent = "Sum: " + (num1 * num2)
}
function divide()
{
    value.textContent = "Sum: " + (num1 / num2)
}