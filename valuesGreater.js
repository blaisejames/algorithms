function valuesGreater(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[1]) {
            console.log(arr[i]);
            count++;
        }
    }
    return count + " values are greater than the second element of the array";
}
console.log(valuesGreater([1,3,5,7,9,13]));