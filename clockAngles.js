function clockHandAngles(seconds) {
    var hour, minute, second, degrees = 0;
    var timeValue = [3600, 60, 1];
    var timeCount = [];
    var degrees = [30, 6, 6];
    var day = [86400, 1440, 24]
    var timeLeft = seconds;

    for (var i = 0; i <= timeValue.length; i++) {
        if (timeLeft >= day[i]) {
            timeLeft = timeLeft - day[i];
            console.log(timeLeft);
        }
        if (timeCount[i] >= 1 ) {
            timeCount[i] = timeLeft / timeValue[i];
            timeLeft = timeLeft - (timeCount[i] * timeValue[i]);
            console.log(timeLeft);
        }
        else {
            timeCount[i] = 0;
        }
    }
    console.log("Hour Hand: " + timeCount[0]*degrees[0] + " degrees\n" + 
    "Minute Hand: " + timeCount[1]*degrees[1] + " degrees\n" +
    "Second Hand: " + timeCount[2]*degrees[2] + " degrees");
}
console.log(clockHandAngles(119730));

// Clock Hand Angles
// Create function clockHandAngles(seconds) that, given the number of seconds since 12:00:00, will print the angles (in degrees) of the hour, minute and second hands. As a quick review, there are 360 degrees in a full rotation.

// Examples: Given clockHandAngles(3600) (equivalent to 1:00:00), print "Hour Hand: 30 degs. Minute Hand: 0 degs. Second Hand: 0 degs.". For an input parameter seconds of 119730 (equivalent to 9:15:30 plus 24 hrs!), you should log "Hour Hand: 277.75 degs. Minute Hand: 93 degs. Second Hand: 180 degs.". Note: in the second example, the angle for the minute hand is not simply 90 degrees; it has advanced a bit further, because of the additional 30 seconds in that minute so far.

// Second: Also calculate and print degrees for an additional "Week Hand" that rotates once each week.