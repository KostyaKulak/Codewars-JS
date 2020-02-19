function removeChar(str) {
    var result = "";
    for (var i  = 1 ; i <= str.length - 2; i++) {
        result += str[i];
    }
    return result;
};   