function whatHappensToday(){
    var last100 = 100;
    var volcano = 10;
    var tsunami = 15;
    var earthquake = 20;
    var blizzard = 25;
    var meteor = 30;
    console.log("Here are the probabilities of calamities happening today based on what has happened over the past 100 days:");
    console.log("Chance of a volcano: " + volcano/last100*100 + " percent");
    console.log("Chance of a tsunami: " + tsunami/last100*100 + " percent");
    console.log("Chance of an earthquake: " + earthquake/last100*100 + " percent");
    console.log("Chance of a blizzard: " + blizzard/last100*100 + " percent");
    console.log("Chance of meteors: " + meteor/last100*100 + " percent");
    console.log("Have a nice day!");
}
console.log(whatHappensToday());