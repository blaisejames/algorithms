function extractDigit(num, digitNum) {
    return (Math.floor(Math.abs(num) / Math.pow(10, digitNum) % 10));
}
// First
console.log(extractDigit(1824,7));

// Second
console.log(extractDigit(123.452,-3));

// Third
console.log(extractDigit(-8675309,2));
console.log(extractDigit(-123.452,-2));