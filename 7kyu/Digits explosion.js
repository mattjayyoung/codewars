// Digits explosion (7kyu) - January 11th

function explode(s) {
  const removeZeros = s.match(/[(1-9]/ig)

  if (removeZeros === null){
    return ""
  }

  return removeZeros.map(num => num.repeat(Number(num))).join('')
  
}

explode("312") // "333122"
explode("102269") // "12222666666999999999"],
explode("0") // ""],
explode("000") // ""],
explode("123") //  "122333"]