function reverse(arr){
    var lastval = arr.length - 1;
    var temp = 0;
    for(var firstval = 0; firstval < arr.length; firstval++){
        if(firstval < lastval){
            temp = arr[firstval];
            arr[firstval] = arr[lastval];
            arr[lastval] = temp;
            lastval = lastval - 1
        }
    }
    return arr;
  }
console.log(reverse([3,1,6,4,2]));