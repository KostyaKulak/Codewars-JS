function count(string) {
    var freq = new Object();
    for (let i = 0; i < string.length; i++) {
        freq[string[i]] = freq[string[i]] == undefined ? 1 : freq[string[i]] + 1;
    }
    return freq;
}