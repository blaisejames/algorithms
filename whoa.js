var sum = 0;
for (var i = -300000; i <= 300000; i++) {
    if (i % 3 == 0) {
        sum = sum + i;
    };
};
console.log(sum);