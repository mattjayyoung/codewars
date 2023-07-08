function position(letter){
return `Position of alphabet: ${letter.charCodeAt(0) - 96}`
}

position("a"),"Position of alphabet: 1");
Test.assertEquals(position("z"),"Position of alphabet: 26");
Test.assertEquals(position("e"),"Position of alphabet: 5");