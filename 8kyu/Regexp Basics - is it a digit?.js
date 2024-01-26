// Regexp Basics - is it a digit? - 8kyu (January 26th)

String.prototype.digit = function() {
  
  if (/^\d$/.test(this)){
    return true
  } else {
    return false
  }
};