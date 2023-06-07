function secondSymbol(s, symbol) {
  let str = s.split('')
  let result = -1
  
  if (str.indexOf(symbol) > -1){
    let position = str.indexOf(symbol)
    str.splice(position,1)
    

    if (str.indexOf(symbol) > -1){
      let secondPosition = str.indexOf(symbol)
      result = secondPosition + 1
    }
  }
  return result // -1
}


secondSymbol("WadfnsowNozbqIGqTUVgGxrkVdVqpROfkOqJCmdDFoAfCvHdDswYPAhyLADNFhrFJnTidpnMdEAJkDrOYDdXFaniQS", "W") // -1


secondSymbol('doyKNiImtkbWwuaPrYJyvZXpkTiuWzMiQBxR', 'x') // -1
secondSymbol('Hello world!!!','l') // 3, 'Find the index of the second symbol "l" in the string');
secondSymbol('Hello world!!!', 'o') // 7, 'Find the index of the second symbol "o" in the string');
secondSymbol('Hello world!!!', 'A') // -1, 'The symbol "A" is not in the string');
secondSymbol('', 'q') // -1, 'The symbol "q" is not in the string');
secondSymbol('Hello', '!') // -1, 'The symbol "!" is not in the string');