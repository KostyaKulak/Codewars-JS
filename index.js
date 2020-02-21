function findShort(s) {
    return s.split(" ").map(a => a.length).reduce((a, b) => a < b ? a : b);
}