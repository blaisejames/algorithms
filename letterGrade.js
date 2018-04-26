function letterGrade(score) {
    if (score >=90 && score <=100) {
        console.log ("Score: " + score + ". Grade: A");
    }
    else if (score >=80 && score <90) {
        console.log ("Score: " + score + ". Grade: B");
    }
    else if (score >=70 && score <80) {
        console.log ("Score: " + score + ". Grade: C");
    }
    else if (score >=60 && score <70) {
        console.log ("Score: " + score + ". Grade: D");
    }
    else if (score >=0 && score <60) {
        console.log ("Score: " + score + ". Grade: F");
    }
    else {
        console.log ("That's not a valid score!");
    }
}
console.log(letterGrade(61));