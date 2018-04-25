function evensOdds(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] && arr[i+1] && arr[i+2]) {
            if(arr[i] % 2 != 0 && arr[i+1] % 2 != 0 &&  arr[i+2] % 2 != 0) {
            console.log("That's odd!");
            }
            if(arr[i] % 2 == 0 && arr[i+1] % 2 == 0 &&  arr[i+2] % 2 == 0) {
            console.log("Even more so!");
            }
        }
    }
}
console.log(evensOdds([0, 0, 0, 1, 2, 1, 2, 4, 2, 3, 4, 5]));