function cake(x, y) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var sum = 0;
    for (let i = 0; i < y.length; i += 2) {
        sum += y.charCodeAt(i);
    }
    for (let i = 1; i < y.length; i += 2) {
        sum += alphabet.indexOf(y[i]) + 1;
    }
    if (sum > 0.7 * x) {
        return "Fire!";
    } else {
        return "That was close!";
    }
}