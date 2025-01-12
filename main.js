import { KilometersToMeters } from "./utils.js"

// references to HTML
const lengthInput_One = document.getElementById("fromLength");
const lengthInput_Two = document.getElementById("toLength");

const lengthSelect_One = document.getElementById("lengthFrom");
const lengthSelect_Two = document.getElementById("lengthTo");


// global variables
let lengthInput_One_Value;
let lengthInput_Two_Value;

let lengthSelect_One_Value;
let lengthSelect_Two_Value;

document.getElementById('fromLength').addEventListener('change', function () {
    lengthInput_One_Value = this.value;
    console.log(lengthInput_One_Value);
});

document.getElementById('toLength').addEventListener('change', function () {
    lengthInput_Two_Value = this.value;
    console.log(lengthInput_Two_Value);
});

document.getElementById('lengthFrom').addEventListener('change', function () {
    lengthSelect_One_Value = this.value;
    console.log(lengthSelect_One_Value);
});

document.getElementById('lengthTo').addEventListener('change', function () {
    lengthSelect_Two_Value = this.value;
    console.log(lengthSelect_Two_Value);
});







//let result = KilometersToMeters(2);
//console.log(result);

//console.log(lengthInput_One, lengthInput_Two, lengthSelect_One, lengthSelect_Two);



