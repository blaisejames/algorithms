function fibonacci(index) {
    var series = [0, 1];
    if (index > 1) {
        for (var i = 2; i <= index; i++) {
            series.push(series[i-2] + series[i-1]);
            console.log(series);
        }
    }
    return series[index];
}
console.log(fibonacci(8));