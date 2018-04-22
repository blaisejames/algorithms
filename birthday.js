function yourBirthday(num1, num2) {
    if ((num1 == 4 && num2 == 19) || (num1 == 19 && num2 == 4)) {
        console.log("How did you know?");
    }
    else {
        console.log("Just another day....");
    }
}
console.log(yourBirthday(19, 4));
