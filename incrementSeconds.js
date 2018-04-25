function incrementSeconds(arr) {
    for (var i = 0; i < arr.length-1; i++) {
        if (i % 2 != 0) {
            arr[i] = arr[i] + 1
        }
        console.log(arr[i]);
    }
    return arr;
}
console.log(incrementSeconds([2,2,2,2,2,2,2]));