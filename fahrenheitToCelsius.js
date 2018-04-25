function fahrenheitToCelsius(fDegrees) {
    var celsius = 0;
    celsius = (fDegrees - 32) * .556
    return fDegrees + " fahrenheit is " + celsius + " celsius";
}
console.log(fahrenheitToCelsius(32));