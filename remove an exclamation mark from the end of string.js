// Remove an exclamation mark from the end of string - 8kyu (November 10th)

function remove (string) {
  
return string.endsWith("!") ? string.slice(0, string.length - 1) : string
  
}

remove("Hi!")// "Hi")//;
remove("Hi!!!")// "Hi!!")//;
remove("!Hi")// "!Hi")//;
remove("!Hi!")// "!Hi")//;
remove("Hi! Hi!")// "Hi! Hi")//;
remove("Hi")// "Hi")//;