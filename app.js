let firstValue = "";
let secondValue = "";
let operator = null;
let equation = "";
let cont = false;

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
        // secondValue = "";
        // equation = "0";
        // operator = null;
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
const btnSound = document.querySelector("#audio");

//Store values
numbers.forEach((number)=>{
    number.addEventListener("click", () => appendNumber(number.textContent))
})

operators.forEach((operator)=>{
    operator.addEventListener("click", ()=> {
        if(operator && firstValue.length > 0 && secondValue.length > 0){cont = true;}
        
        if(firstValue.length < 1){
            alert("You forgot to add an initial value");
        }
        else if(cont){
            evaluate();
            alterEquation();
            storeOperator(operator.textContent);
            secondValue = firstValue;
            firstValue = "";          
        }
        else{
            storeOperator(operator.textContent);
            alterEquation();
            shiftValues();
        }
    })
})

//Evaluate and Clear
equals.addEventListener("click", evaluate);
equals.addEventListener("click", ()=>{
    cont = false;
    secondValue = "";
    equation = null;
    operator = null;
})
clear.addEventListener("click", reset);

//Debug
buttons.forEach((button)=>{
    button.addEventListener("click", display);
    button.addEventListener("click", ()=>{
        button.style.boxShadow = "inset 0px 5px 10px 3px rgba(0,0,0,.8)";
        // btnSound.play();
        setTimeout(()=>{
            button.style.boxShadow = "inset 0px -5px 5px 2px rgba(0,0,0,.5)";
        }, 100)
    })
    button.addEventListener("click", ()=> console.log(`
        firstValue: ${firstValue}
        operator: ${operator}
        secondValue: ${secondValue}
        equation: ${equation}
    `))
})

