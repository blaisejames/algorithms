function double(arr) {
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        newarr.push(arr[i] * 2);
    }
    return "New array with doubled values: [ " + newarr + " ]";
}
console.log(double([2,4,6]));