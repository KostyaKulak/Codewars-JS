function distinct(a) {
    var result = [];
    var freq = [];
    for (let i = 0; i < a.length; i++) {
        if (freq[a[i]] == undefined) {
            result.push(a[i]);
            freq[a[i]] = 1;
        }
    }
    return result;
}