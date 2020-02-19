function mygcd(x, y) {
    var gcd = Math.min(x, y);
    while (gcd != 1) {
        if (x % gcd == 0 && y % gcd == 0) {
            return gcd;
        }
        else gcd--;
    }
    return gcd;
}