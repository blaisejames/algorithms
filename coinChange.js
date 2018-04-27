function generateCoinChange(cents) {
    var quarters, dimes, nickels, pennies = 0;
    var remainder = cents;

    if (remainder / 25 >= 1 ) {
        quarters = Math.floor(remainder / 25);
        remainder = remainder - quarters * 25;
    }
    else {
        quarters = 0;
    }
    if (remainder / 10 >= 1) {
        dimes = Math.floor(remainder / 10);
        remainder = remainder - dimes * 10;
    }
    else {
        dimes = 0;
    }
    if (remainder / 5 >= 1) {
        nickels = Math.floor(remainder / 5);
        remainder = remainder - nickels * 5;
    }
    else {
        nickels = 0;
    }
    pennies = Math.floor(remainder);
    
    console.log("The smallest number of coins possible to give " + cents + " cents change is:\n\nQuarters: " + quarters + "\nDimes: " + dimes + "\nNickels: " + nickels + "\nPennies: " + pennies);
}
console.log(generateCoinChange(124));

// Shorten the code using a loop (from 30 to 18 lines)
function shortenedCoinChange(cents) {
    var coinValue = [25, 10, 5, 1];
    var coinCount = [];
    var remainder = cents;
    
    for (var i = 0; i <= coinValue.length; i++) {
        if (remainder / coinValue[i] >= 1 ) {
            coinCount[i] = Math.floor(remainder / coinValue[i]);
            remainder = remainder - (coinCount[i] * coinValue[i]);
        }
        else {
            coinCount[i] = 0;
        }
    }
    console.log("The smallest number of coins possible to give " + cents + " cents change is:\n\nQuarters: " + coinCount[0] + "\nDimes: " + coinCount[1] + "\nNickels: " + coinCount[2] + "\nPennies: " + coinCount[3]);
}
console.log(shortenedCoinChange(124));

// Add half-dollar, dollar coins with 40 additional characters or less
function moreCoinChange(cents) {
    var coinValue = [100, 50, 25, 10, 5, 1];
    var coinCount = [];
    var remainder = cents;
    
    for (var i = 0; i <= coinValue.length; i++) {
        if (remainder / coinValue[i] >= 1 ) {
            coinCount[i] = Math.floor(remainder / coinValue[i]);
            remainder = remainder - (coinCount[i] * coinValue[i]);
        }
        else {
            coinCount[i] = 0;
        }
    }
    console.log("The smallest number of coins possible to give " + cents + " cents change is:\n\nDollars: " + coinCount[0] + "\nHalf-Dollars: " + coinCount[1] + "\nQuarters: " + coinCount[2] + "\nDimes: " + coinCount[3] + "\nNickels: " + coinCount[4] + "\nPennies: " + coinCount[5]);
}
console.log(moreCoinChange(124));