
function isPrime(num) {
    if (num < 2) {
        return false;
    } else {
        var start = Math.sqrt(num) >> 0;
        while (start != 1) {
            if (num % start == 0) {
                return false;
            }
            start--;
        }
        return true;
    }
}
