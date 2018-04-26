function lastFew(arr, x) {
    for (var i = 0; i <= arr.length - x; i++) {
       arr.shift();
    }
    return arr;
}
console.log(lastFew([2,4,6,8,10],3));