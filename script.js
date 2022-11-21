const elemBtnCalc = document.getElementById("btn-calc");
const elemCalcScreen = document.getElementById("calc-screen");
const elemBackround = document.getElementById("background")


function btnSwitch() {
    elemBackround.classList.toggle("btnSwitch");
}

function btnCalc() {    
    sum = result;

      
    
    if(isNaN(sum)) {
        elemCalcScreen.innerHTML = "ERROR"
    } else {
        elemCalcScreen.innerHTML = sum; 
    }
    
}

function addDigit(thisSign) {
    elemCalcScreen.innerHTML += thisSign;
}

function btnBackSpace() { 
    let calcScreen = elemCalcScreen.innerHTML;
    calcScreen = calcScreen.slice(0, -1);
    elemCalcScreen.innerHTML = calcScreen;
    
}


function btnClearAll() {
    let calcScreen = elemCalcScreen.innerHTML;
    calcScreen = ' '
    elemCalcScreen.innerHTML = calcScreen;



}

function btnConvertToDollar() {
    let calcScreen = elemCalcScreen.innerHTML;
    let sum = (calcScreen * 0.089)
    if(isNaN(sum)) {
        elemCalcScreen.innerHTML = "ERROR"
    } else {
    elemCalcScreen.innerHTML = sum;
    }

}

function btnConvertToEuro() {
    let calcScreen = elemCalcScreen.innerHTML;
    let sum = (calcScreen * 0.091)
    if(isNaN(sum)) {
        elemCalcScreen.innerHTML = "ERROR"
    } else {
        elemCalcScreen.innerHTML = sum;  
    }


    
}




