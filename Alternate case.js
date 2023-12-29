// Alternate case (7kyu) - December 29th

function alternateCase(s) {
  return s.split('').map(el => el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()).join('')
}

alternateCase("abc") // "ABC");
alternateCase("ABC") // "abc");
alternateCase("Hello World") // "hELLO wORLD"); 
