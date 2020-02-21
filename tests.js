Test.assertEquals("".isLetter(), false);
Test.assertEquals("a".isLetter(), true);
Test.assertEquals("X".isLetter(), true);
Test.assertEquals("7".isLetter(), false);
Test.assertEquals("*".isLetter(), false);
Test.assertEquals("ab".isLetter(), false);
Test.assertEquals("a\n".isLetter(), false);
