//Create an object literal for the calculator because we won't be using more
//Than one instance of the calculator.

const Calculator = {
    //Attributes
    currentValue: 0,
    storedValue: 0,

    topLine: "",
    bottomLine: "",

    //Methods
    add: ()=>{Calculator.storedValue += Calculator.currentValue;},
    subtract: ()=>{Calculator.storedValue -= Calculator.currentValue;},
    divide: ()=>{Calculator.storedValue /= Calculator.currentValue;},
    multiply: ()=>{Calculator.storedValue *= Calculator.currentValue;},


    isNumber: (value)=>{return(value >= 0 && value <=9 ? true : false)},
    addToLine: (value)=>{
        if(Calculator.isNumber(value)){
            if(Calculator.bottomLine.length < 10){
                Calculator.bottomLine += value;
            }
        }        
    }
}

//Query DOM
const buttons = document.querySelectorAll(".button");
const topLineDOM = document.querySelector(".top");
const bottomLineDOM = document.querySelector(".bottom");

//Add Functionality
buttons.forEach((button)=>{button.addEventListener("click", ()=>{
    Calculator.addToLine(button.textContent);
    console.log(Calculator.bottomLine);
})})