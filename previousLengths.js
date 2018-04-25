function previousLengths(arr) {
    for (var i = 1 ; i < arr.length; i++) {
        var newLength = arr[i-1].length;
        arr[i] = newLength;
        console.log(arr[i]);
    }
    return arr;
}
console.log(previousLengths(["cat", "fish", "monkey", "penguin"]));