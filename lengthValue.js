function lengthValue(num1, num2) {
    arr = [];
    for (var i = 0; i < num1; i++) {
        arr.push(num2);
    }
    if (num1 == num2) {
        console.log("Jinx!");
    }
    return arr;
}
console.log(lengthValue(6,6));
