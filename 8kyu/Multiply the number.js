// Multiply the number - 8kyu (March 2nd)

function multiply(number){
  let multiplier = Math.abs(number).toString().length
  
  return number * (5 ** multiplier)
}


multiply(-2) // -10);
