const buttons = document.querySelectorAll(".button");
const currentDisplay = document.querySelector(".current-display");
const topDisplay = document.querySelector(".top-display");

function Calculator(){
    this.a = 0;
    this.result = 0;
    this.topDisplay = "";
    this.display = "";

    this.addToDisplay = function(value){
        this.display += value;
    }
    this.chooseOperator = function(input){
        switch(input){
            case "+":
                this.add();
                break;
            case "-":
                this.subtract();
                break;
            case "/":
                this.divide();
                break;
            case "*":
                this.multiply();
                break;
        }
    }
    this.add = function(){
        this.result += this.a;
    }

    this.subtract = function(){
        this.result -= this.a;
    }

    this.divide = function(){
        this.result /= this.a;
    }

    this.multiply = function(){
        this.result *= this.a;
    }
}

const calc = new Calculator();
const isNumber = function(number){
    return (number >= 0 && number <= 9 ? true : false);
}

const isOperator = function(input){
    switch(input){
        case "+":
            return true;
        case "-":
            return true;
        case "/":
            return true;
        case "*":
            return true;
    }
}

buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        button.style.boxShadow="inset 0 3px 5px 1px rgb(65, 65, 65)";
        
        if(isNumber(button.textContent) && calc.display.length < 10){
            calc.addToDisplay(button.textContent);
            currentDisplay.textContent=calc.display;
        }

        if(isOperator(button.textContent)){
            calc.a = parseInt(calc.display);
            calc.chooseOperator(button.textContent);
            topDisplay.textContent = calc.result;

            calc.display = "";
            currentDisplay.textContent = "0";
        }
        
        setTimeout(()=>{
            button.style.boxShadow="none";
        }, 100)
    })
})