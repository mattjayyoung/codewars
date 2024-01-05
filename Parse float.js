// Parse float (8kyu) - January 5th

function parseF(s) {
  let result = parseFloat(s)
  console.log(result)

  if (isNaN(result)){
    return null
  } 
    return result
}



parseF(2.5)
parseF("one")
parseF(0)

parseF(1)
parseF(123)