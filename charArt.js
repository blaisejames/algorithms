function drawLeftChars(num, char) {
    var space = " ";
    str = char.repeat(num);
    str += space.repeat(75-num);
    console.log(str);
    console.log(str.length);
}
function drawRightChars(num, char) {
    var space = " ";
    str = space.repeat(75-num);
    str += char.repeat(num);
    console.log(str);
    console.log(str.length);
}
function drawCenterChars(num, char) {
    var space = " ";
    str = space.repeat((75-num)/2);
    str += char.repeat(num);
    str += space.repeat((75-num)/2);
    console.log(str);
    console.log(str.length);
}
console.log(drawLeftChars(5, "!"));
console.log(drawRightChars(5, "%"));
console.log(drawCenterChars(5, "&"));