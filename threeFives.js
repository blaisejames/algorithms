function ThreesFives() {
    var sum = 0;
    for (var i = 100; i <= 4000000; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum = sum + i;
        }
    }
    return sum;
}
console.log(ThreesFives());

function BetterThreesFives(num1, num2) {
    var sum = 0;
    for (var i = num1; i <= num2; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum = sum + i;
        }
    }
    return sum;
}
console.log(BetterThreesFives(100, 4000000));