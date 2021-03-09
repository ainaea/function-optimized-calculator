//replacing id getter function
function pickerById(entrying) {
    return document.getElementById(entrying);
}

//Number values
const txtResult = pickerById('txtResult'); //For operation  output
const txtNum1 = pickerById('txtNum1'); //First value
const txtNum2 = pickerById('txtNum2'); //Second output

//Operator values
const btnSum = pickerById('btnSum');
const btnMinus = pickerById('btnMinus');
const btnMultiply = pickerById('btnMultiply');
const btnDivide = pickerById('btnDivide');
const btnModulo = pickerById('btnModulo');

//Bind to event listener
btnSum.addEventListener('click', calculate);
btnMinus.addEventListener('click', calculate);
btnMultiply.addEventListener('click', calculate);
btnDivide.addEventListener('click', calculate);
btnModulo.addEventListener('click', calculate);

//replacing arithemic functions
function sum(a,b) {
    return a + b;
}
function minus(a,b) {
    return a - b;
}
function multiply(a,b) {
    return a * b;
}
function divide(a,b) {
    return b!= 0? a / b: "Cannot divide by zero";
}

function modulo(a,b) {
    return b!= 0? a % b: "Cannot modulo by zero";
}

//Creating a function
function calculate() {
    let num1 = parseInt(txtNum1.value);
    let num2 = parseInt(txtNum2.value);

    //Getting the event target values of element clicked on
    let sign = event.target.value;
    // console.log(sign);
    if (sign == "+"){txtResult.value = sum(num1,num2)}
    else if (sign == "-"){txtResult.value = minus(num1,num2)}
    else if (sign == "*"){txtResult.value = multiply(num1,num2)}
    else if (sign == "/"){txtResult.value = divide(num1,num2)
        // if(num2 == 0){txtResult.value = "Cannot divide by zero"}
        // else{txtResult.value = num1/num2}
        }
    else{  txtResult.value = modulo(num1,num2)
        // if(num2 == 0){txtResult.value = "Cannot modulo by zero"}
        // else{txtResult.value = num1 %  num2}
    }    
}

// function getElement (elementId){
//     return document.getElementById(elementId);
// }