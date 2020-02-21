// Return an array
function fizzbuzz(n) {
    var res = [];
    for (let i = 1; i < n; i++) {
        var toAdd = "";
        if (i % 3 == 0) {
            toAdd += "Fizz";
        }
        if (i % 5 == 0) {
            toAdd += "Buzz";
        }
        if (i % 3 == 0 || i % 5 == 0) {
            res.push(toAdd);
        } else {
            res.push(i);
        }
    }
    return res;
}
