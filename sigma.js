function sigma(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(sigma(5));