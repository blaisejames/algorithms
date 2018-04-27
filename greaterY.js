var arr = [1, 2, 3, 4];
var Y = 3;
var count = 0;
for (var i = 0; i < arr.length; i++) {
   if (arr[i] > Y) {
       count++;
   }
}
console.log(count);