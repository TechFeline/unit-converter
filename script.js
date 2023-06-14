// Unit data
var units = [
    { name: "Meter", value: "m" },
    { name: "Kilometer", value: "km" },
    { name: "Centimeter", value: "cm" },
    { name: "Millimeter", value: "mm" },
    { name: "Mile", value: "mi" },
    { name: "Yard", value: "yd" },
    { name: "Foot", value: "ft" },
    { name: "Inch", value: "in" },
    { name: "Nautical Mile", value: "nmi" },
    { name: "Astronomical Unit", value: "au" },
    // Add more units here
];

// Populate unit select elements
var fromUnitSelect = document.getElementById("fromUnit");
var toUnitSelect = document.getElementById("toUnit");

units.forEach(function(unit) {
    var option = document.createElement("option");
    option.value = unit.value;
    option.text = unit.name;
    fromUnitSelect.appendChild(option);

    var option2 = document.createElement("option");
    option2.value = unit.value;
    option2.text = unit.name;
    toUnitSelect.appendChild(option2);
});

function convert() {
    var inputValue = document.getElementById("inputValue").value;
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;

    var result;
    if (fromUnit === "m" && toUnit === "km") {
        result = inputValue / 1000;
    } else if (fromUnit === "m" && toUnit === "cm") {
        result = inputValue * 100;
    } else if (fromUnit === "m" && toUnit === "mm") {
        result = inputValue * 1000;
    } else if (fromUnit === "m" && toUnit === "mi") {
        result = inputValue * 0.000621371;
    } else if (fromUnit === "m" && toUnit === "yd") {
        result = inputValue * 1.09361;
    } else if (fromUnit === "m" && toUnit === "ft") {
        result = inputValue * 3.28084;
    } else if (fromUnit === "m" && toUnit === "in") {
        result = inputValue * 39.3701;
    } else if (fromUnit === "m" && toUnit === "nmi") {
        result = inputValue * 0.000539957;
    } else if (fromUnit === "m" && toUnit === "au") {
        result = inputValue * 6.68459e-12;
    } else if (fromUnit === "km" && toUnit === "m") {
        result = inputValue * 1000;
    } else if (fromUnit === "km" && toUnit === "cm") {
        result = inputValue * 100000;
    } else if (fromUnit === "km" && toUnit === "mm") {
        result = inputValue * 1000000;
    } else if (fromUnit === "km" && toUnit === "mi") {
        result = inputValue * 0.621371;
    } else if (fromUnit === "km" && toUnit === "yd") {
        result = inputValue * 1093.61;
    } else if (fromUnit === "km" && toUnit === "ft") {
        result = inputValue * 3280.84;
    } else if (fromUnit === "km" && toUnit === "in") {
        result = inputValue * 39370.1;
    } else if (fromUnit === "km" && toUnit === "nmi") {
        result = inputValue * 0.539957;
    } else if (fromUnit === "km" && toUnit === "au") {
        result = inputValue * 6.68459e-9;
    } else if (fromUnit === "cm" && toUnit === "m") {
        result = inputValue / 100;
    } else if (fromUnit === "cm" && toUnit === "km") {
        result = inputValue / 100000;
    } else if (fromUnit === "cm" && toUnit === "mm") {
        result = inputValue * 10;
    } else if (fromUnit === "cm" && toUnit === "mi") {
        result = inputValue * 6.2137e-6;
    } else if (fromUnit === "cm" && toUnit === "yd") {
        result = inputValue * 0.0109361;
    } else if (fromUnit === "cm" && toUnit === "ft") {
        result = inputValue * 0.0328084;
    } else if (fromUnit === "cm" && toUnit === "in") {
        result = inputValue * 0.393701;
    } else if (fromUnit === "cm" && toUnit === "nmi") {
        result = inputValue * 5.39957e-6;
    } else if (fromUnit === "cm" && toUnit === "au") {
        result = inputValue * 6.68459e-14;
    } else if (fromUnit === "mm" && toUnit === "m") {
        result = inputValue / 1000;
    } else if (fromUnit === "mm" && toUnit === "km") {
        result = inputValue / 1000000;
    } else if (fromUnit === "mm" && toUnit === "cm") {
        result = inputValue / 10;
    } else if (fromUnit === "mm" && toUnit === "mi") {
        result = inputValue * 6.2137e-7;
    } else if (fromUnit === "mm" && toUnit === "yd") {
        result = inputValue * 0.00109361;
    } else if (fromUnit === "mm" && toUnit === "ft") {
        result = inputValue * 0.00328084;
    } else if (fromUnit === "mm" && toUnit === "in") {
        result = inputValue * 0.0393701;
    } else if (fromUnit === "mm" && toUnit === "nmi") {
        result = inputValue * 5.39957e-7;
    } else if (fromUnit === "mm" && toUnit === "au") {
        result = inputValue * 6.68459e-15;
    } else if (fromUnit === "mi" && toUnit === "m") {
        result = inputValue * 1609.34;
    } else if (fromUnit === "mi" && toUnit === "km") {
        result = inputValue * 1.60934;
    } else if (fromUnit === "mi" && toUnit === "cm") {
        result = inputValue * 160934;
    } else if (fromUnit === "mi" && toUnit === "mm") {
        result = inputValue * 1.609e+6;
    } else if (fromUnit === "mi" && toUnit === "yd") {
        result = inputValue * 1760;
    } else if (fromUnit === "mi" && toUnit === "ft") {
        result = inputValue * 5280;
    } else if (fromUnit === "mi" && toUnit === "in") {
        result = inputValue * 63360;
    } else if (fromUnit === "mi" && toUnit === "nmi") {
        result = inputValue * 0.868976;
    } else if (fromUnit === "mi" && toUnit === "au") {
        result = inputValue * 1.077e-8;
    } else if (fromUnit === "yd" && toUnit === "m") {
        result = inputValue / 1.09361;
    } else if (fromUnit === "yd" && toUnit === "km") {
        result = inputValue / 1093.61;
    } else if (fromUnit === "yd" && toUnit === "cm") {
        result = inputValue * 91.44;
    } else if (fromUnit === "yd" && toUnit === "mm") {
        result = inputValue * 914.4;
    } else if (fromUnit === "yd" && toUnit === "mi") {
        result = inputValue * 0.000568182;
    } else if (fromUnit === "yd" && toUnit === "ft") {
        result = inputValue * 3;
    } else if (fromUnit === "yd" && toUnit === "in") {
        result = inputValue * 36;
    } else if (fromUnit === "yd" && toUnit === "nmi") {
        result = inputValue * 0.000493737;
    } else if (fromUnit === "yd" && toUnit === "au") {
        result = inputValue * 6.11093e-12;
    } else if (fromUnit === "ft" && toUnit === "m") {
        result = inputValue / 3.28084;
    } else if (fromUnit === "ft" && toUnit === "km") {
        result = inputValue / 3280.84;
    } else if (fromUnit === "ft" && toUnit === "cm") {
        result = inputValue * 30.48;
    } else if (fromUnit === "ft" && toUnit === "mm") {
        result = inputValue * 304.8;
    } else if (fromUnit === "ft" && toUnit === "mi") {
        result = inputValue * 0.000189394;
    } else if (fromUnit === "ft" && toUnit === "yd") {
        result = inputValue / 3;
    } else if (fromUnit === "ft" && toUnit === "in") {
        result = inputValue * 12;
    } else if (fromUnit === "ft" && toUnit === "nmi") {
        result = inputValue * 0.000164579;
    } else if (fromUnit === "ft" && toUnit === "au") {
        result = inputValue * 2.03719e-12;
    } else if (fromUnit === "in" && toUnit === "m") {
        result = inputValue / 39.3701;
    } else if (fromUnit === "in" && toUnit === "km") {
        result = inputValue / 39370.1;
    } else if (fromUnit === "in" && toUnit === "cm") {
        result = inputValue * 2.54;
    } else if (fromUnit === "in" && toUnit === "mm") {
        result = inputValue * 25.4;
    } else if (fromUnit === "in" && toUnit === "mi") {
        result = inputValue * 1.5783e-5;
    } else if (fromUnit === "in" && toUnit === "yd") {
        result = inputValue / 36;
    } else if (fromUnit === "in" && toUnit === "ft") {
        result = inputValue / 12;
    } else if (fromUnit === "in" && toUnit === "nmi") {
        result = inputValue * 1.3715e-5;
    } else if (fromUnit === "in" && toUnit === "au") {
        result = inputValue * 1.70108e-13;
    } else if (fromUnit === "nmi" && toUnit === "m") {
        result = inputValue / 0.000539957;
    } else if (fromUnit === "nmi" && toUnit === "km") {
        result = inputValue / 0.539957;
    } else if (fromUnit === "nmi" && toUnit === "cm") {
        result = inputValue * 185200;
    } else if (fromUnit === "nmi" && toUnit === "mm") {
        result = inputValue * 1.852e+6;
    } else if (fromUnit === "nmi" && toUnit === "mi") {
        result = inputValue * 1.15078;
    } else if (fromUnit === "nmi" && toUnit === "yd") {
        result = inputValue * 2025.37;
    } else if (fromUnit === "nmi" && toUnit === "ft") {
        result = inputValue * 6076.12;
    } else if (fromUnit === "nmi" && toUnit === "in") {
        result = inputValue * 72913.4;
    } else if (fromUnit === "nmi" && toUnit === "au") {
        result = inputValue * 1.21472e-8;
    } else if (fromUnit === "au" && toUnit === "m") {
        result = inputValue / 6.68459e-12;
    } else if (fromUnit === "au" && toUnit === "km") {
        result = inputValue / 6.68459e-9;
    } else if (fromUnit === "au" && toUnit === "cm") {
        result = inputValue / 6.68459e-14;
    } else if (fromUnit === "au" && toUnit === "mm") {
        result = inputValue / 6.68459e-15;
    } else if (fromUnit === "au" && toUnit === "mi") {
        result = inputValue * 92955807.3;
    } else if (fromUnit === "au" && toUnit === "yd") {
        result = inputValue * 105700000000;
    } else if (fromUnit === "au" && toUnit === "ft") {
        result = inputValue * 347850000000;
    } else if (fromUnit === "au" && toUnit === "in") {
        result = inputValue * 4174200000000;
    } else if (fromUnit === "au" && toUnit === "nmi") {
        result = inputValue * 9295580.73;
    }

    document.getElementById("result").innerHTML = result.toFixed(4);
}
