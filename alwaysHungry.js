function alwaysHungry(arr) {
    for (var i = 0; i < arr.length; i++) {
        var count = 0;
        if (arr[i] == "food") {
            console.log("yummy");
            count++;
        }
    }
    if (count == 0) {
        console.log("I'm hungry");
    }
}
console.log(alwaysHungry(["foot", "fool", "food", "food"]))