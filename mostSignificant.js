function mostSignificant(num) {
    num = Math.abs(num);
    digits = Math.floor(Math.log10(num));
    num = Math.floor(num / Math.pow(10, digits));
    return num;
}
console.log(mostSignificant(12345))
console.log(mostSignificant(67.89))
console.log(mostSignificant(0.00987))
console.log(mostSignificant(-67.89))