function drawLeftStars(num) {
    var asterisk = "*";
    var space = " ";
    str = asterisk.repeat(num);
    str += space.repeat(75-num);
    console.log(str);
    console.log(str.length);
}

function drawRightStars(num) {
    var asterisk = "*";
    var space = " ";
    str = space.repeat(75-num);
    str += asterisk.repeat(num);
    console.log(str);
    console.log(str.length);
}

function drawCenterStars(num) {
    var asterisk = "*";
    var space = " ";
    str = space.repeat((75-num)/2);
    str += asterisk.repeat(num);
    str += space.repeat((75-num)/2);
    console.log(str);
    console.log(str.length);
}
console.log(drawLeftStars(5));
console.log(drawRightStars(5));
console.log(drawCenterStars(5));