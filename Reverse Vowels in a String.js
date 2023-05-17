// Reverse Vowels in a String - 6kyu (May 16th)

function reverseVowels(str) {

   let onlyLetters = str.split('')

   let vowels = []

   for(let i = 0; i < onlyLetters.length; i++){
    if (onlyLetters[i] === 'a'||onlyLetters[i] === 'e'||onlyLetters[i] === 'i'||onlyLetters[i] === 'o'||onlyLetters[i] === 'u' || onlyLetters[i] === 'A'||onlyLetters[i] === 'E'||onlyLetters[i] === 'I'||onlyLetters[i] === 'O'||onlyLetters[i] === 'U'){
        vowels.push(onlyLetters[i])
    }

   }

    for(let j = 0; j < onlyLetters.length; j++){
        if (onlyLetters[j] === 'a'||onlyLetters[j] === 'e'||onlyLetters[j] === 'i'||onlyLetters[j] === 'o'||onlyLetters[j] === 'u' || onlyLetters[j] === 'A'||onlyLetters[j] === 'E'||onlyLetters[j] === 'I'||onlyLetters[j] === 'O'||onlyLetters[j] === 'U'){
            onlyLetters.splice(j, 1, vowels.pop())
    }
   }

return onlyLetters.join('')
}


reverseVowels("Hello!") // "Holle!"

reverseVowels("Tomatoes") // "Temotaos"
reverseVowels("Reverse Vowels In A String") // "RivArsI Vewols en e Streng"


/*

loop through each letter in str
if it's a vowel, replace it with a placeholder

*/

97(a)-122(z)

65(A)-90(Z)