function factorial(n) {
    if(n < 0 || n > 12 ){
        throw RangeError("Input is below 0 or above 12.");
    }
    var cache = [1, 1], i = 2;
    if (typeof cache[n] != 'undefined')
        return cache[n];
    var result = cache[i - 1];
    for (; i <= n; i++)
        cache[i] = result = result * i;
    return result;
}