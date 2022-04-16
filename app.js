let firstValue = "";
let secondValue = "";
let operator = null;
let equation = null;

const calculate = function(){
        a = Number(firstValue);
        b = Number(secondValue);
        switch(Calculator.operator){
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

const appendNumber = function(value){
    if(firstValue.length <= 10){
        firstValue+=value;
    }
}
const storeOperator = function(value){operator=value;}
const alterEquation = function(){equation = `${firstValue} ${operator}`}

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const buttons = document.querySelectorAll(".button");

//Store values
numbers.forEach((number)=>{
    number.addEventListener("click", () => appendNumber(number.textContent))
})

operators.forEach((operator)=>{
    operator.addEventListener("click", ()=> {
        storeOperator(operator.textContent)
        alterEquation();
    })
})

//Debug
buttons.forEach((button)=>{
    button.addEventListener("click", ()=> console.log(`
        firstValue: ${firstValue}
        operator: ${operator}
        secondValue: ${secondValue}
        equation: ${equation}
    `))
})

