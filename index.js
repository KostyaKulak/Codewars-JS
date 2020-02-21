function positiveSum(arr) {
    arr = arr.filter(function (el) {
        return el > 0;
    });
    return arr.length == 0 ? 0 : arr.reduce((a, b) => a + b)
}