function whatReallyHappenedToday(){
    var last100 = 100;
    var volcano = 10 / last100;
    var tsunami = 15 / last100;
    var earthquake = 20 / last100;
    var blizzard = 25 / last100;
    var meteor = 30 / last100;
    var all = volcano * tsunami * earthquake * blizzard * meteor
    console.log("The possibility of Kenny experiencing the combination of a volcano, tsunami, earthquake, blizzard or meteor shower today based on what has happened over the past 100 days is: " + all*100 + " percent");
    console.log("Those are better odds, Kenny!");
}
console.log(whatReallyHappenedToday());