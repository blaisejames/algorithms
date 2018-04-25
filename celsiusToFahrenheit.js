function celsiusToFahrenheit(cDegrees) {
    var fahrenheit = 0;
    fahrenheit = cDegrees * 1.8 + 32;
    return cDegrees + " celsius is " + fahrenheit + " fahrenheit";
}
console.log(celsiusToFahrenheit(0));