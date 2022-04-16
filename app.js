//Create an object literal for the calculator because we won't be using more
//Than one instance of the calculator.

const Calculator = {
    //Attributes
    currentValue: 0,
    storedValue: 0,
    result: 0,
    operator: "",

    topLine: "",
    bottomLine: "",

    //Methods
    add: ()=>{Calculator.result = Calculator.storedValue + Calculator.currentValue;},
    subtract: ()=>{Calculator.result = Calculator.storedValue - Calculator.currentValue;},
    divide: ()=>{Calculator.result = Calculator.storedValue / Calculator.currentValue;},
    multiply: ()=>{Calculator.result = Calculator.storedValue * Calculator.currentValue;},
    calculate: ()=>{
        if(Calculator.operator=="+"){Calculator.add()}
        else if(Calculator.operator=="-"){Calculator.subtract()}
        else if(Calculator.operator=="/"){Calculator.divide()}
        else if(Calculator.operator=="*"){Calculator.multiply()}
    },

    isNumber: (value)=>{return(value >= 0 && value <=9 ? true : false)},
    addToCurrent: (value)=>{
        if(Calculator.isNumber(value)){
            if(Calculator.bottomLine.length < 10){
                Calculator.bottomLine += value;
                Calculator.currentValue = Number(Calculator.bottomLine);
            }
        }        
    },
    addToStorage: (value)=>{
        if(!Calculator.isNumber(value)){
            if(value=="="){
                Calculator.calculate();
                Calculator.storedValue = Calculator.result;
            }
            else{
                //Store Operator
                Calculator.operator = value;
                //Store Value
                Calculator.topLine = Calculator.bottomLine;
                Calculator.storedValue = Calculator.currentValue;
                
                //Reset Current
                Calculator.currentValue = 0;
                Calculator.bottomLine = "";
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
    Calculator.addToCurrent(button.textContent);
    Calculator.addToStorage(button.textContent);
    console.log(`
        ==Results==
        Current: ${Calculator.currentValue}
        Stored: ${Calculator.storedValue}
        Operator: ${Calculator.operator}
        Result: ${Calculator.result}
    `)
})})