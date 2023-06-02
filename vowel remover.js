// Vowel Remover - 8kyu (June 1st)

function shortcut (string) {

    return string.split('').filter(char => char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u').join('')
  
    
  }

shortcut("how are you today?")

shortcut("hello")     -->  "hll"
shortcut("codewars")  -->  "cdwrs"
shortcut("goodbye")   -->  "gdby"
shortcut("HELLO")     -->  "HELLO"


