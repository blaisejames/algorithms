function addSeven(arr) {
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        newarr[i] = arr[i] + 7;
    }
    console.log("Old array: [ " + arr + " ]");
    newarr.shift()
    return "New array: [ " + newarr + " ]";
}
console.log(addSeven([1,2,3,4,5]));