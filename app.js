const buttons = document.querySelectorAll(".button");
const currentDisplay = document.querySelector(".current-display");

function Calculator(){
    this.currentValue=0;
    this.lastValue=0;
    this.display = "";

    this.addToDisplay = function(value){
        this.display += value;
    }
    this.add = function(){
        this.currentValue += this.lastValue;
    }
}

const calc = new Calculator();
const isNumber = function(number){
    return (number >= 0 && number <= 9 ? true : false);
}

buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        button.style.boxShadow="inset 0 3px 5px 1px rgb(65, 65, 65)";
        
        if(isNumber(button.textContent) && calc.display.length < 10){
            calc.addToDisplay(button.textContent);
            currentDisplay.textContent=calc.display;
        }
        
        setTimeout(()=>{
            button.style.boxShadow="none";
        }, 100)
    })
})