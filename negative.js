function negative(arr) {
    var newarr = [];
    newarr = arr;
    for (var i = 0; i < newarr.length; i++) {
        if (newarr[i] > 0) {
            newarr[i] = -[newarr[i]];
        }
    }
    return newarr;
}
console.log(negative([1,-3,5]));