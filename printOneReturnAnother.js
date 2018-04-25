function printOne(arr) {
    console.log("Second to last number in the array is: " + arr[arr.length - 2]);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            return "First odd number in the array is " + arr[i];
        }
    }
}
console.log(printOne([2,3,4,5,6,8]));