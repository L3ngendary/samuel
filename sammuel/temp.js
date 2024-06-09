
function convertTemperature() {
    let temperature = parseFloat(prompt("Enter the temperature value:"));
    let conversionType = prompt("Enter the conversion type (C to F or F to C):");

    let convertedTemperature;
    if (conversionType.toUpperCase() === "C TO F") {
        convertedTemperature = (temperature * 9/5) + 32;
        alert(temperature + "°C is " + convertedTemperature.toFixed(2) + "°F");
    } else if (conversionType.toUpperCase() === "F TO C") {
        convertedTemperature = (temperature - 32) * 5/9;
        alert(temperature + "°F is " + convertedTemperature.toFixed(2) + "°C");
    } else {
        alert("Invalid conversion type entered!");
    }
}
convertTemperature();
