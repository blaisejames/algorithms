function sumToOne(num) {
    while (num > 9) {
        var arr = [];
        var sum = 0;
        arr = Array.from(num.toString()).map(Number);
        for (var i = 0; i < arr.length; i++) {
            sum = sum + arr[i];
        }
        num = sum;
    }
    return num; 
}
console.log(sumToOne(345));