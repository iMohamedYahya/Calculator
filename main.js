var currentInput = document.getElementById('currentInput')
var answerScreen = document.getElementById('answerScreen')
var buttons = document.querySelectorAll('.button')
var eraseBtn = document.getElementById('erase')
var clearBtn = document.getElementById('clear')
var evaluate = document.getElementById('evaluate')

buttons.forEach(but => {
 but.addEventListener("click" , function() { 
    currentInput.innerHTML += but.innerHTML
    var Ops = ["/","%","*","-","+"];
    const firstInput = parseInt(currentInput.innerHTML[0]);
    const lastInput = parseInt(currentInput.innerHTML[currentInput.innerHTML.length - 1]);
    const secondLastInput = parseInt(currentInput.innerHTML[currentInput.innerHTML.length - 2]);
    const thirdLastInput = currentInput.innerHTML[currentInput.innerHTML.length - 3];

    if(!isNaN(lastInput) && !isNaN(firstInput)) {
        answerScreen.innerHTML =  eval(currentInput.innerHTML);
    }
    if(currentInput.innerHTML ==  "00"){
        currentInput.innerHTML = ""
    }
    if(currentInput.innerHTML[0] === '0' && currentInput.innerHTML[1] && currentInput.innerHTML[1] !== "."){
        currentInput.innerHTML = currentInput.innerHTML[1];
    }
    if (!isNaN(lastInput) && secondLastInput === 0 && Ops.includes(thirdLastInput)) {
        currentInput.innerHTML = currentInput.innerHTML.substring(0, currentInput.innerHTML.length - 2) + but.innerHTML
    }
 })
})
evaluate.addEventListener('click' , function(){
    currentInput.innerHTML = answerScreen.innerHTML
    answerScreen.innerHTML = ""
})
clearBtn.addEventListener('click' , function(){
    currentInput.innerHTML = ""
    answerScreen.innerHTML = "0"
})
eraseBtn.addEventListener('click' , function(){
    var goBack = currentInput.innerHTML.split("")
    currentInput.innerHTML = goBack.slice(0,goBack.length -1).join("")
    answerScreen.innerHTML = currentInput.innerHTML
})


