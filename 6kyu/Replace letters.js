// Replace Letters - 6kyu (July 1st)

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
const vowels = ['a','e','i','o','u'];

function replaceLetters(word) {
  let alphabetClone = alphabet.slice()

  let str = ""
  alphabetClone.unshift('z')
  alphabetClone.push('a')
  
for (let i = 0; i < word.length; i++){

if (consonants.includes(word[i])){
      let consonantIndex = alphabetClone.indexOf(word[i])
      let piece = alphabetClone.slice(consonantIndex)
      let vowel = piece.find(el => vowels.includes(el))
      str += vowel
  } else {
    let vowelIndex = alphabetClone.indexOf(word[i])
      let piece = alphabetClone.slice(0, vowelIndex)
      let consonant = piece.findLast(el => consonants.includes(el))
      str += consonant
  }
}
  return str
  
    
}

/*

-find the consonant
-slice from the consonant found to the end of the array

*/


replaceLetters('codewars') // enedazuu
replaceLetters('abcdtuvwxyz') // zeeeutaaaaa


replaceLetters('act') // zeu
replaceLetters('cat') // ezu