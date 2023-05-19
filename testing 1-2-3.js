//Testing 1-2-3 - 7kyu (May 19th)

function number(array){
  return array.map((char, index) => `${index + 1}: ${char}`)

}

number(["a", "b", "c"]) // ["1: a", "2: b", "3: c"]


const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// Expected output: "The character code 113 is equal to q"