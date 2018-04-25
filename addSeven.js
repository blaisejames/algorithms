function addSeven(arr) {
    var newarr = [];
    for (var i = 1; i < arr.length; i++) {
        newarr[i-1] = arr[i] + 7;
    }
    console.log("Old array: [ " + arr + " ]");
    return "New array: [ " + newarr + " ]";
}
console.log(addSeven([1,2,3,4,5]));