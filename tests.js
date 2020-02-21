describe ("must return an array", function () {
    Test.expect(Array.isArray(multiplyAll([1])(1)));
  });
  
  describe ("array has correct length", function () {
    Test.expect(multiplyAll([1, 2])(1).length === 2, "array should have the same length as the array passed in as an argument");
  });
  
  describe ("returned array has correct values", function () {
    Test.assertSimilar(multiplyAll([1, 2, 3])(1), [1, 2, 3]);
    Test.assertSimilar(multiplyAll([1, 2, 3])(2), [2, 4, 6]);
    Test.assertSimilar(multiplyAll([1, 2, 3])(0), [0, 0, 0]);
    Test.assertSimilar(multiplyAll([])(10), [], "should return an empty array");
  });