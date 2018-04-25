function swapCenter(arr){
    var thirdval = arr.length - 1;
    var temp = 0;
    for(var firstval = 0; firstval < arr.length; firstval = firstval + 2){
        if(firstval < thirdval){
            temp = arr[firstval];
            arr[firstval] = arr[thirdval];
            arr[thirdval] = temp;
            thirdval = thirdval - 2
        }
    }
    return arr;
  }
console.log(swapCenter([1, 2, 3, 4, 5, 6]));
console.log(swapCenter([true, 42, "Ada", 2, "pizza"]));