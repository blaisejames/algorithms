for (var i = 1; i <= 100; i++) {
    if (i % 10 == 0) {
        console.log("Coding Dojo");
        continue;
    }
    if (i % 5 == 0) {
        console.log("Coding");
        continue;
    }
    else {
        console.log(i);
    }
}
