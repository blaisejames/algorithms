function sweatshirtPricing(num) {
    cost = 0;
    if (num == 2) {
        discount = 1 - .09;
    }
    else if (num == 3) {
        discount = 1 - .19;
    }
    else if (num > 3) {
        discount = 1 - .35;
    }
    else {
        discount = 1;
    }
    cost = Math.ceil(20 * num * discount);
    return "Your cost for the shirts is $" + cost + " cash.";
}
console.log(sweatshirtPricing(3))