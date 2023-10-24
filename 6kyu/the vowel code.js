// The Vowel Code - 6kyu (October 24th)

function encode(string) {
  let encodedStr = ""
  for (let i = 0; i < string.length; i++){
    switch(string[i]){
      case 'a':
        encodedStr += "1"
      break
      case 'e':
        encodedStr += "2"
      break
      case 'i':
        encodedStr += "3"
      break
      case 'o':
        encodedStr += "4"
      break
      case 'u':
        encodedStr += "5"
      break
      default:
        encodedStr += string[i]
    }
  }

  return encodedStr
}


function decode(string) {
  let decodedStr = ""
  for (let i = 0; i < string.length; i++){
    switch(string[i]){
      case '1':
        decodedStr += "a"
      break
      case '2':
        decodedStr += "e"
      break
      case '3':
        decodedStr += "i"
      break
      case '4':
        decodedStr += "o"
      break
      case '5':
        decodedStr += "u"
      break
      default:
        decodedStr += string[i]
    }
  }

  return decodedStr
}





decode('h2ll4') // 'hello');


encode('hello') // 'h2ll4'
encode('How are you today?') // 'H4w 1r2 y45 t4d1y?');
encode('This is an encoding test.') // 'Th3s 3s 1n 2nc4d3ng t2st.');