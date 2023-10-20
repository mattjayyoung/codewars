function doubleChar(str) {
  let newStr = ""
  let i = 0

  while (i < str.length){
    newStr += str[i] += str[i]
    i++
  }
  return newStr
}


doubleChar("abcd")// "aabbccdd"
doubleChar("Adidas")// "AAddiiddaass"
doubleChar("1337")// "11333377"
doubleChar("illuminati")// "iilllluummiinnaattii"
doubleChar("123456")// "112233445566"
doubleChar("%^&*(")// "%%^^&&**(("