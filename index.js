function squareDigits(num) {
    return new Number(new String(num)
        .split("")
        .map(str => new Number(str))
        .map(n => n * n)
        .map(n => n.toString())
        .reduce((a, b) => a + b));
}