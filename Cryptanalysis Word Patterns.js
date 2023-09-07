// Cryptanalysis Word Patterns (7kyu) - September 6th

function wordPattern(word) {
let obj = {}
let uniqueArr = []

const caseInsensitive = word.toLowerCase()
  const unique = new Set(caseInsensitive)
  let index = 0

  for (let char of unique){
    
    if (!obj[char]){
        obj[char] = index++
    } 
    
}

return word.toLowerCase().split('').map(char => {
    for (prop in obj){
        if (prop === char){
            return obj[prop]
        }
    }
}).join('.')


}

wordPattern("hello") // "0.1.2.2.3"
wordPattern("heLlo") // "0.1.2.2.3"
wordPattern("helLo") // "0.1.2.2.3"
wordPattern("Hippopotomonstrosesquippedaliophobia") // "0.1.2.2.3.2.3.4.3.5.3.6.7.4.8.3.7.9.7.10.11.1.2.2.9.12.13.14.1.3.2.0.3.15.1.13")