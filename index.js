String.prototype.vowel = function () {
    return /^[aeiouAEIOU]{1}$/.test(this);
};