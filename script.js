var oneBtn = document.getElementById("calc-1")
var twoBtn = document.getElementById("calc-2")
var threeBtn = document.getElementById("calc-3")
var fourBtn = document.getElementById("calc-4")
var fiveBtn = document.getElementById("calc-5")
var sixBtn = document.getElementById("calc-6")
var sevenBtn = document.getElementById("calc-7")
var eightBtn = document.getElementById("calc-8")
var nineBtn = document.getElementById("calc-9")
var zeroBtn = document.getElementById("calc-0")

var decimalBtn = document.getElementById("calc-decimal")
var clearBtn = document.getElementById("calc-clear")
var backspaceBtn = document.getElementById("calc-backspace")
var displayValElement = document.getElementById("calc-display-val")
var additionBtn = document.getElementById("calc-addition")
var subtractionBtn = document.getElementById("calc-subtraction")
var multiplicationBtn = document.getElementById("calc-multiplication")
var divisionBtn = document.getElementById("calc-division")

var calcNumBtns = document.getElementsByClassName("calc-btn-num")
var calcOperationBtns = document.getElementsByClassName("calc-btn-operator")

var displayVal = "0"
var pendingVal
var evalStringArray = []

var updateDisplayVal = (clickObj) => {
    var btnText = clickObj.target.innerText

    if(displayVal == "0")
        displayVal = ''

        displayVal += btnText
        displayValElement.innerText = displayVal
    
}

var performOperation = (clickObj) =>{
    var operator = clickObj.target.innerText

    switch(operator)
    {
        case "+" : 
        pendingVal = displayVal
        displayVal = "0"
        displayValElement.innerText = displayVal
        evalStringArray.push(pendingVal)
        evalStringArray.push("+")
        break

        case "-" : 
        pendingVal = displayVal
        displayVal = "0"
        displayValElement.innerText = displayVal
        evalStringArray.push(pendingVal)
        evalStringArray.push("-")
        break 

        case "x" : 
        pendingVal = displayVal
        displayVal = "0"
        displayValElement.innerText = displayVal
        evalStringArray.push(pendingVal)
        evalStringArray.push("*")
        break

        case "÷" : 
        pendingVal = displayVal
        displayVal = "0"
        displayValElement.innerText = displayVal
        evalStringArray.push(pendingVal)
        evalStringArray.push("/")
        break

        case "=" : 
        evalStringArray.push(displayVal)
        var evaluation = eval(evalStringArray.join(" "))
        displayVal = evaluation + ""
        displayValElement.innerText = displayVal
        evalStringArray = []
        break

        default : 
        break
    }
}

for(var i = 0; i < calcNumBtns.length; i++)
{
    calcNumBtns[i].addEventListener('click', updateDisplayVal, false)
}

for(var i = 0; i < calcOperationBtns.length; i++)
{
    calcOperationBtns[i].addEventListener('click', performOperation, false)
}

clearBtn.onclick = () =>{
    displayVal = "0"
    pendingVal = undefined
    evalStringArray = []
    displayValElement.innerHTML = displayVal
}

backspaceBtn.onclick = () =>{
    let lengthOfDisplayVal = displayVal.length
    displayVal = displayVal.slice(0, lengthOfDisplayVal - 1)

    if(displayVal == "")
    displayVal = "0"

    displayValElement.innerText = displayVal
}

decimalBtn.onclick = () =>{
    if(!displayVal.includes("."))
    displayVal += "."

    displayValElement.innerText = displayVal
}