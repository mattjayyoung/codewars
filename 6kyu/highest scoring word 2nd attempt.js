function high(x){
    const splitArr = x.split(' ')
    
    const pointValues = splitArr.map(word => word.split('').map(char => char.charCodeAt(0) - 96).reduce((acc,curr) => acc + curr), 0)

    let highest = Math.max(...pointValues)
    const indexOfHighest = pointValues.indexOf(highest)

    return splitArr[indexOfHighest] 

}

/*

// split up the string into separate strings that are words
// within each word, we will map each character and convert it to its UTF-16 code
// grab the index of the number which is the highest and use that index to find the word in the split array from step 1

*/

high('man i need a taxi up to ubud') // 'taxi'
high('what time are we climbing up the volcano') // 'volcano' 
high('take me to semynak') // 'semynak'
high('aa b') // 'aa'
high('b aa') // 'b'
high('bb d') // 'bb'
high('d bb') // 'd'
high('aaa b') // 'aaa'