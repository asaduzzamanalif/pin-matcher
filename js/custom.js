"use strict";
let formControl = document.querySelector(".form-control");
let generateBtn = document.querySelector(".generate-btn");
let validPin = document.querySelector("#validPin");
let submitBtn = document.querySelector(".submit-btn");
let clearBtn = document.querySelector(".clearBtn");
let failedAlert = document.querySelector(".failedAlert");
let passAlert = document.querySelector(".passAlert");
let backSpace = document.querySelector(".backSpace")

    // function area
function display(num) {
    validPin.value += num;
}


generateBtn.addEventListener("click", function(){
    let randomNumber = Math.random() * 9999;
    randomNumber = Math.round(randomNumber);
    if ( randomNumber < 999 ) {

    } else {
        formControl.value = randomNumber;
    }
    return randomNumber;
})

submitBtn.addEventListener("click", function(){
    if ( formControl.value == "" || validPin.value == "" ) {
        failedAlert.style.display = "block";
        passAlert.style.display = "none";

    } else if ( formControl.value == validPin.value ) {
        passAlert.style.display = "block";
        failedAlert.style.display = "none";

    } else {
        failedAlert.style.display = "block";
        passAlert.style.display = "none";
    }
})

clearBtn.addEventListener("click", function(){
    validPin.value = "";
})

backSpace.addEventListener('click', function(){
    let value = validPin.value;
    validPin.value = value.substr(0, value.length - 1);
})