var iq = 101;
var increment = .01;
for (var i = 1; i <= 98; i++) {
    iq = iq + increment;
    increment = increment + .01
    console.log("Day " + i + ": IQ of " + iq);
}
console.log("Bogdan's IQ would be " + iq + " at the end of the bootcamp.");