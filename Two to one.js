// Two to One

function longest(s1, s2) {
  let splitOne = s1.split('')
  let splitTwo = s2.split('')
  let combined = splitOne.concat(splitTwo)

  let result = new Set(combined.sort())
  
  return Array.from(result).join('')
}


longest("aretheyhere", "yestheyarehere") // "aehrsty"
longest("loopingisfunbutdangerous", "lessdangerousthancoding") // "abcdefghilnoprstu"
longest("inmanylanguages", "theresapairoffunctions") // "acefghilmnoprstuy"