let firstValue = "";
let secondValue = "";
let operator = null;
let equation = "0";

const calculate = function(){
        a = Number(secondValue);
        b = Number(firstValue);
        switch(operator){
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
        }
}

const evaluate = function(){
    if(operator){
        firstValue = calculate();
        secondValue = "";
        equation = "0";
        operator = null;
    }else(alert("Didn't select an operator"))
        
}

const appendNumber = function(value){
    if(firstValue.length <= 10){
        firstValue+=value;
    }
}
const storeOperator = function(value){operator=value;}
const alterEquation = function(){equation = `${firstValue} ${operator}`}
const shiftValues = function(){
    secondValue = firstValue;
    firstValue = "";
}

const display = function(){
    topLine.textContent = equation;
    bottomLine.textContent = firstValue;
}

const reset = function(){
    firstValue = "";
    secondValue = "";
    equation = "";
    bottomLine.textContent="0";
    topLine.textContent="0";
}

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const buttons = document.querySelectorAll(".button");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const topLine = document.querySelector(".top");
const bottomLine = document.querySelector(".bottom");

//Store values
numbers.forEach((number)=>{
    number.addEventListener("click", () => appendNumber(number.textContent))
})

operators.forEach((operator)=>{
    operator.addEventListener("click", ()=> {
        storeOperator(operator.textContent);
        alterEquation();
        shiftValues();
    })
    operator.addEventListener("click", ()=>{
        
    })
})

//Evaluate and Clear
equals.addEventListener("click", evaluate);
clear.addEventListener("click", reset);

//Debug
buttons.forEach((button)=>{
    button.addEventListener("click", display);
    button.addEventListener("click", ()=> console.log(`
        firstValue: ${firstValue}
        operator: ${operator}
        secondValue: ${secondValue}
        equation: ${equation}
    `))
})

