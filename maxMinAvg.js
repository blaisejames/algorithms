var arr = [1, 2, 3, 4, 5];
var sum = 0;
var max = 0;
var min = 0;
var avg = 0;
for (var i = 0; i < arr.length; i++) {
   if (arr[i] > max) {
       max = arr[i];
   }
   else if (arr[i] < min) {
       min = arr[i];
   }
   sum = sum + arr[i];
}
avg = sum/arr.length;
console.log("Max: " + max + "\nMin: " + min + "\nAvg: " + avg);