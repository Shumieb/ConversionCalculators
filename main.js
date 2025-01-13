import {
    KilometersToMeters,
    KilometersToCentimeters,
    KilometersToMilimeters,
    MetersToKilometers,
    MetersToCentimeters,
    MetersToMilimeters,
    CentimetersToKilometers,
    CentimetersToMeters,
    CentimetersToMilimeters,
    MilimetersToKilometers,
    MilimetersToMeters,
    MilimetersToCentimeters,
    CelsiusToKelvin,
    CelsiusToFahrenheit,
    KelvinToCelsius,
    KelvinToFahrenheit,
    FahrenheitToCelsius,
    FahrenheitToKelvin
} from "./utils.js"

// references to HTML
const lengthInput_One = document.getElementById("fromLength");
const lengthInput_Two = document.getElementById("toLength");
const lengthSelect_One = document.getElementById("lengthFrom");
const lengthSelect_Two = document.getElementById("lengthTo");

const tempInput_One = document.getElementById("fromTemp");
const tempInput_Two = document.getElementById("toTemp");
const tempSelect_One = document.getElementById("tempFrom");
const tempSelect_Two = document.getElementById("tempTo");

const weightInput_One = document.getElementById("fromWeight");
const weightInput_Two = document.getElementById("toWeight");
const weightSelect_One = document.getElementById("weightFrom");
const weightSelect_Two = document.getElementById("weightTo");


// global variables
let lengthInput_One_Value = 0;
let lengthInput_Two_Value = 0;
let lengthSelect_One_Value = "km";
let lengthSelect_Two_Value = "m";

let tempInput_One_Value = 0;
let tempInput_Two_Value = 0;
let tempSelect_One_Value = "celsius";
let tempSelect_Two_Value = "kelvin";

let weightInput_One_Value = 0;
let weightInput_Two_Value = 0;
let weightSelect_One_Value = "kilogram";
let weightSelect_Two_Value = "gram";

// event listeners for length ui changes
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

    // reset results
    if (lengthInput_Two_Value != null) {
        lengthInput_Two_Value = null;
        lengthInput_Two.value = lengthInput_Two_Value;
    }

    //console.log(lengthSelect_One_Value);
});

document.getElementById('lengthTo').addEventListener('change', function () {
    lengthSelect_Two_Value = this.value;

    if (lengthInput_Two_Value != null) {
        lengthInput_Two_Value = null;
        lengthInput_Two.value = lengthInput_Two_Value;
    }

    //console.log(lengthSelect_Two_Value);
});

// event listeners for temp ui changes
document.getElementById("fromTemp").addEventListener('change', function () {
    tempInput_One_Value = this.value;
    //console.log(tempInput_One_Value);
});

document.getElementById('toTemp').addEventListener('change', function () {
    tempInput_Two_Value = this.value;
    //console.log(tempInput_Two_Value);
});

document.getElementById('tempFrom').addEventListener('change', function () {
    tempSelect_One_Value = this.value;

    // reset results
    if (tempInput_Two_Value != null) {
        tempInput_Two_Value = null;
        tempInput_Two.value = tempInput_Two_Value;
    }

    //console.log(tempSelect_One_Value);
});

document.getElementById('tempTo').addEventListener('change', function () {
    tempSelect_Two_Value = this.value;

    if (tempInput_Two_Value != null) {
        tempInput_Two_Value = null;
        tempInput_Two.value = tempInput_Two_Value;
    }

    //console.log(tempSelect_Two_Value);
});

// event listeners for weight ui changes
document.getElementById("fromWeight").addEventListener('change', function () {
    weightInput_One_Value = this.value;
    console.log(weightInput_One_Value);
});

document.getElementById('toWeight').addEventListener('change', function () {
    weightInput_Two_Value = this.value;
    console.log(weightInput_Two_Value);
});

document.getElementById('weightFrom').addEventListener('change', function () {
    weightSelect_One_Value = this.value;

    // reset results
    if (weightInput_Two_Value != null) {
        weightInput_Two_Value = null;
        weightInput_Two.value = weightInput_Two_Value;
    }

    console.log(weightSelect_One_Value);
});

document.getElementById('weightTo').addEventListener('change', function () {
    weightSelect_Two_Value = this.value;

    if (weightInput_Two_Value != null) {
        weightInput_Two_Value = null;
        weightInput_Two.value = weightInput_Two_Value;
    }

    console.log(weightSelect_Two_Value);
});

// event listener for length button conversions
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

        if (lengthSelect_One_Value === "m") {
            switch (lengthSelect_Two_Value) {
                case "km":
                    lengthInput_Two_Value = MetersToKilometers(lengthInput_One_Value);
                    lengthInput_Two.value = lengthInput_Two_Value;
                    //console.log("m");
                    break;
                case "cm":
                    lengthInput_Two_Value = MetersToCentimeters(lengthInput_One_Value);
                    lengthInput_Two.value = lengthInput_Two_Value;
                    //console.log("cm");
                    break;
                case "mm":
                    lengthInput_Two_Value = MetersToMilimeters(lengthInput_One_Value);
                    lengthInput_Two.value = lengthInput_Two_Value;
                    //console.log("mm");
                    break;
                default:
                    break;
            }
        }

        if (lengthSelect_One_Value === "cm") {
            switch (lengthSelect_Two_Value) {
                case "km":
                    lengthInput_Two_Value = CentimetersToKilometers(lengthInput_One_Value);
                    lengthInput_Two.value = lengthInput_Two_Value;
                    //console.log("m");
                    break;
                case "m":
                    lengthInput_Two_Value = CentimetersToMeters(lengthInput_One_Value);
                    lengthInput_Two.value = lengthInput_Two_Value;
                    //console.log("cm");
                    break;
                case "mm":
                    lengthInput_Two_Value = CentimetersToMilimeters(lengthInput_One_Value);
                    lengthInput_Two.value = lengthInput_Two_Value;
                    //console.log("mm");
                    break;
                default:
                    break;
            }
        }

        if (lengthSelect_One_Value === "mm") {
            switch (lengthSelect_Two_Value) {
                case "km":
                    lengthInput_Two_Value = MilimetersToKilometers(lengthInput_One_Value);
                    lengthInput_Two.value = lengthInput_Two_Value;
                    //console.log("m");
                    break;
                case "m":
                    lengthInput_Two_Value = MilimetersToMeters(lengthInput_One_Value);
                    lengthInput_Two.value = lengthInput_Two_Value;
                    //console.log("cm");
                    break;
                case "cm":
                    lengthInput_Two_Value = MilimetersToCentimeters(lengthInput_One_Value);
                    lengthInput_Two.value = lengthInput_Two_Value;
                    //console.log("mm");
                    break;
                default:
                    break;
            }
        }
    }
})

// event listener for temp button conversions
document.getElementById("tempConvertBtn").addEventListener("click", function () {

    // checks if both inputs are greater than 0
    if (tempInput_One_Value <= 0 && tempInput_Two_Value <= 0) {
        console.log("temp input one and two are empty.");
        return;
    }

    // checks if both selects have the same value
    if (tempSelect_One_Value === tempSelect_Two_Value) {
        if (tempInput_One_Value > 0) {
            tempInput_Two_Value = tempInput_One_Value;
            tempInput_Two.value = tempInput_Two_Value;
            return;
        }
    }

    // check if selects are different values
    if (tempSelect_One_Value !== tempSelect_Two_Value) {

        if (tempSelect_One_Value === "celsius") {
            switch (tempSelect_Two_Value) {
                case "kelvin":
                    tempInput_Two_Value = CelsiusToKelvin(tempInput_One_Value);
                    tempInput_Two.value = tempInput_Two_Value;
                    //console.log("celsius");
                    break;
                case "fahrenheit":
                    tempInput_Two_Value = CelsiusToFahrenheit(tempInput_One_Value);
                    tempInput_Two.value = tempInput_Two_Value;
                    //console.log("fahrenheit");
                    break;
                default:
                    break;
            }
        }

        if (tempSelect_One_Value === "kelvin") {
            switch (tempSelect_Two_Value) {
                case "celsius":
                    tempInput_Two_Value = KelvinToCelsius(tempInput_One_Value);
                    tempInput_Two.value = tempInput_Two_Value;
                    //console.log("celsius");
                    break;
                case "fahrenheit":
                    tempInput_Two_Value = KelvinToFahrenheit(tempInput_One_Value);
                    tempInput_Two.value = tempInput_Two_Value;
                    //console.log("fahrenheit");
                    break;
                default:
                    break;
            }
        }

        if (tempSelect_One_Value === "fahrenheit") {
            switch (tempSelect_Two_Value) {
                case "celsius":
                    tempInput_Two_Value = FahrenheitToCelsius(tempInput_One_Value);
                    tempInput_Two.value = tempInput_Two_Value;
                    //console.log("celsius");
                    break;
                case "kelvin":
                    tempInput_Two_Value = FahrenheitToKelvin(tempInput_One_Value);
                    tempInput_Two.value = tempInput_Two_Value;
                    //console.log("fahrenheit");
                    break;
                default:
                    break;
            }
        }
    }
})





