// Replace all vowel to exclamation mark in the sentence - 8kyu (October 16th)

function replace(s){
  const regex = /[aeiou]/ig
  return s.replace(regex, "!")
}


replace("Hi!") // "H!!")
replace("!Hi! Hi!") // "!H!! H!!")
replace("aeiou") // "!!!!!")
replace("ABCDE") // "!BCD!")