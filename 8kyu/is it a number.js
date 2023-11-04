// Is it a number? - 8kyu (November 3rd)

function isDigit(s) {
  s == parseFloat(s)
}


isDigit("3") // true
isDigit("  3  ") // true
isDigit("-3.23") // true
isDigit("3-4") // false
isDigit("  3   5") // false
isDigit("3 5") // false
isDigit("zero") // false
isDigit("-234.4") 


isDigit("s2324") // false
isDigit("3 4") // false
isDigit("3-4")
isDigit("3  4")  
isDigit("34.65") // true - should be false
isDigit("-0") // true - should be false