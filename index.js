function multiplyAll(arr) {
    return function (n) {
        return arr.map(function (el) {
            el *= n;
        });
    }
}