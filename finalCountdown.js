function finalCountdown(param1, param2, param3, param4) {
    var count = param3;
    while (count > param2) {
        if (count % param1 == 0 && count != param4) {
            console.log(count);
        }
        count--;
    }
}
finalCountdown(3,5,17,9);