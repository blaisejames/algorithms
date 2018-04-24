function countdown(num) {
    var arr = [];
    for (var i = num; i >= 0; i--) {
        arr.push(i);
    }
    console.log(arr);
    return "This array is " + arr.length + " elements long";
}
console.log(countdown(10));