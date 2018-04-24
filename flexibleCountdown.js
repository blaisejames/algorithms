function flexCount(lowNum, highNum, mult) {
    for (var i = highNum; i >= lowNum; i = i - mult) {
        console.log(i);
    }
}
console.log(flexCount(2,9,3));