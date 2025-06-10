function sum(a,b){
  return a + b;
}
function subtract(a,b){
 return a - b;
}
function multiply(a,b){
return a * b;
}

function divide(a,b){
  return a / b;
}


// let firstNumber , secondNumber , opertorSign;

const result = document.querySelector("#result");

function operate(operator,firstNumber,secondNumber){

switch(operator){
  case ("+"): return result = sum(firstNumber,secondNumber);
  break;
  case ("-"): return result = subtract(firstNumber,secondNumber);
  break;
  case ("*"): return result = multiply(firstNumber,secondNumber);
  break;
  case ("/"): return result = divide(firstNumber,secondNumber);
  break;
  default: return result= "enter correct operator";
  
}


}


  

