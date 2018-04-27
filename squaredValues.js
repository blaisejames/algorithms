var arr = [1, 2, 3, 4];
for (var i = 1; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
}
console.log(arr);