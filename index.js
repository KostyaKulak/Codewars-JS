function findDup(arr) {
    var res = 0;
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
            if (arr[j] == arr[j + 1]) {
                res = arr[j];
                return res;
            }
        }
    }
    return res;
}