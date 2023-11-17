// Remove all exclamation marks from sentence but ensure an exclamation mark at the end of string (8kyu) - November 17th

function remove (string) {
  string = string.match(/[A-Z\s]/ig)
  return string.join('') + "!"
}

remove("!Hi!", "Hi!");
remove("Hi! Hi!", "Hi Hi!");