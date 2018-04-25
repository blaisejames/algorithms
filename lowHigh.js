function lowHigh(arr) {
    var max = arr[0];
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    console.log("low: " + min);
    return "high " + max;
}
console.log(lowHigh([23,4,7,-2]));