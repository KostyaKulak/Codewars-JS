// write the function isAnagram
var isAnagram = function (test, original) {
    if (test.length != original.length) {
        return false;
    }
    else if (test === original) {
        return true;
    }
    else {
        test = test.toLowerCase();
        original = original.toLowerCase();
        let testCodesSum = 0;
        let originalCodesSum = 0;
        for (let i = 0; i < test.length; i++) {
            testCodesSum = testCodesSum + test.charCodeAt(i);
        }
        for (let j = 0; j < original.length; j++) {
            originalCodesSum = originalCodesSum + original.charCodeAt(j);
        }
        if (testCodesSum === originalCodesSum) {
            return true;
        } else {
            return false;
        }
    }
};
