function greaterThanTwo(arr){
    var arrnew = [];
    var count = 0;
    if(arr.length > 1) {
      for (var i = 0; i < arr.length; i++){
          if (arr[i] > arr[1]){
          arrnew.push(arr[i]);
          count += 1;
          }
      }
      console.log("There are " + count + " values in the array greater than its second value.");
      return arrnew;
    }
    else {
      console.log("You need at least 2 elements in your array");
    }
}
console.log(greaterThanTwo([1,2,3,4]));