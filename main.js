import {
    KilometersToMeters,
    KilometersToCentimeters,
    KilometersToMilimeters
} from "./utils.js"

// references to HTML
const lengthInput_One = document.getElementById("fromLength");
const lengthInput_Two = document.getElementById("toLength");

const lengthSelect_One = document.getElementById("lengthFrom");
const lengthSelect_Two = document.getElementById("lengthTo");


// global variables
let lengthInput_One_Value = 0;
let lengthInput_Two_Value = 0;

let lengthSelect_One_Value = "km";
let lengthSelect_Two_Value = "m";

document.getElementById('fromLength').addEventListener('change', function () {
    lengthInput_One_Value = this.value;
    //console.log(lengthInput_One_Value);
});

document.getElementById('toLength').addEventListener('change', function () {
    lengthInput_Two_Value = this.value;
    //console.log(lengthInput_Two_Value);
});

document.getElementById('lengthFrom').addEventListener('change', function () {
    lengthSelect_One_Value = this.value;
    //console.log(lengthSelect_One_Value);
});

document.getElementById('lengthTo').addEventListener('change', function () {
    lengthSelect_Two_Value = this.value;
    //console.log(lengthSelect_Two_Value);
});

document.getElementById("lengthConvertBtn").addEventListener("click", function () {

    // checks if both inputs are greater than 0
    if (lengthInput_One_Value <= 0 && lengthInput_Two_Value <= 0) {
        console.log("length input one and two are empty.");
        return;
    }

    // checks if both selects have the same value
    if (lengthSelect_One_Value === lengthSelect_Two_Value) {
        if (lengthInput_One_Value > 0) {
            lengthInput_Two_Value = lengthInput_One_Value;
            lengthInput_Two.value = lengthInput_Two_Value;
            return;
        }
    }

    // check if selects are different values
    if (lengthSelect_One_Value !== lengthSelect_Two_Value) {

        if (lengthSelect_One_Value === "km") {
            switch (lengthSelect_Two_Value) {
                case "m":
                    lengthInput_Two_Value = KilometersToMeters(lengthInput_One_Value);
                    lengthInput_Two.value = lengthInput_Two_Value;
                    //console.log("m");
                    break;
                case "cm":
                    lengthInput_Two_Value = KilometersToCentimeters(lengthInput_One_Value);
                    lengthInput_Two.value = lengthInput_Two_Value;
                    //console.log("cm");
                    break;
                case "mm":
                    lengthInput_Two_Value = KilometersToMilimeters(lengthInput_One_Value);
                    lengthInput_Two.value = lengthInput_Two_Value;
                    //console.log("mm");
                    break;
                default:
                    break;
            }
        }




    }
})







//let result = KilometersToMeters(2);
//console.log(result);

//console.log(lengthInput_One, lengthInput_Two, lengthSelect_One, lengthSelect_Two);



