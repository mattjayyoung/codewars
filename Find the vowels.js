// Find the Vowels - 7kyu (September 4th)

function vowelIndices(word){
  const vowels = ['a','e','i','o','u','y', "A", "E", "I", "O", "U", "Y"]
  const letters = word.split('')
  let results = []
  
  return letters.map((letter,index) => {
    if (vowels.find(char => char === letter)){
      return index + 1
    }
  }).filter(char => typeof char === 'number')
}

vowelIndices("supercalifragilisticexpialidocious") // [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33]

vowelIndices("mmm") // []);
vowelIndices("apple") //  [1,5]);
vowelIndices("super") // [2,4]);
vowelIndices("orange") // [1,3,6]);
