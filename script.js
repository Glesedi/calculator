let operator = '';
let currentValue ='';
let previousValue = '';

document.addEventListener("DOMContentLoaded", function(){
//store all compoents of html in our js
let clearbuttton = document.querySelector("#clear-button");
let equal = document.querySelector(".equal");
let decimal = document.querySelector(".decimal");

let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");

let previousscreen = document.querySelector(".previous");
let currentscreen = document.querySelector(".current");

numbers.forEach((numbers) => numbers.addEventListener("click", function(e){
    handleNumber(e.target.textContent)
    currentscreen.textContent =currentValue;
  }))
  operators.forEach((op) => op.addEventListener("click", function(e){
    handleoperator(e.target.textContent)
    previousscreen.textContent = previousValue + " " + operator;
    currentscreen.textContent = currentValue;
  }))

  clearbuttton.addEventListener("click", function(){
    previousValue ='';
    currentValue ='';
    operator= '';
    previousscreen.textContent =previousValue;
    currentscreen.textContent=currentValue;
  })

  equal.addEventListener("click", function(){
    if (currentValue !== '' && previousValue !== ''){
        calculate();
        previousscreen.textContent = '';
        currentscreen.textContent = currentValue;
    }
});

decimal.addEventListener("click", function(){
  adddecimal();
});
});


function handleNumber(num){
  if(currentValue.length <= 7){
    currentValue += num;
  }
} 

function handleoperator(op){
  operator = op;
  previousValue = currentValue;
  currentValue ='';
  }

  function calculate(){
    previousValue = parseFloat(previousValue);
    currentValue = parseFloat(currentValue);

    if (operator ==="+"){
      previousValue += currentValue;
    }
    else if (operator === "-"){
        previousValue -= currentValue;
      }
      else if (operator === "x"){
        previousValue *= currentValue;
      }
      else if (operator === "/"){
        previousValue /= currentValue
      }
      previousValue = roundNumber (previousValue);
      previousValue =  previousValue.toString();
      currentValue = previousValue.toString();
    }

    function roundNumber(num){
      return Math.round(num * 1000) / 1000;
    }
    
    function adddecimal(){
      if(!currentValue.includes(".")){
        currentValue += '.';
      }
    }

