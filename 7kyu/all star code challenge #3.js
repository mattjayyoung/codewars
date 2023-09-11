// All Star Code Challenge #3 (7kyu) - Sept 11th

function removeVowels (str){
const noVowels = str.match(/[^aeiou]/ig)

if (!noVowels){
    return ''
} else {
    return noVowels.join('')
}

}

removeVowels("drake")
removeVowels("aeiou")