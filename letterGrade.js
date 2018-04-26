function letterGrade(score) {
    var sign = "";
    if (score % 10 == 0 || score % 10 == 1 || score % 10 == 2) { 
        sign = "-";
        }
    else if (score % 10 == 8 || score % 10 == 9) { 
        sign = "+";
    }
    if (score >=98 && score <=100) {
        console.log ("Score: " + score + ". Grade: A");
    }
    else if (score >=90 && score <=97) {
        console.log ("Score: " + score + ". Grade: A" + sign);
    }
    else if (score >=80 && score <90) {
        console.log ("Score: " + score + ". Grade: B" + sign);
    }
    else if (score >=70 && score <80) {
        console.log ("Score: " + score + ". Grade: C" + sign);
    }
    else if (score >=60 && score <70) {
        console.log ("Score: " + score + ". Grade: D" + sign);
    }
    else if (score >=0 && score <60) {
        console.log ("Score: " + score + ". Grade: F");
    }
    else {
        console.log ("That's not a valid score!");
    }
}
console.log(letterGrade(61));