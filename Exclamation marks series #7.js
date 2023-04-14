//Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

function remove(str){
    const arr = str.split(' ')
    let result = ""
    
    //Loops through array of words
   for (let i = 0; i <= arr.length; i++){
    
    let count = 0 // Count resets with every word

    if (arr[i].includes('!')){    
        
        //Loops within word
        for (let j = 0; j <= arr[i].length; j++){
            if (arr[i][j] === '!')
                count++
        }

        if (count > 1){
            result += arr[i]
        }
    } else if (count < 1) {
        result += arr[i]
    }
    return result
}
}





// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
remove("Hi! Hi! Hi!") // ""
remove("Hi Hi! Hi!") // "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"
remove("vghj bidmo ujccer! !ican jgbmzn zfwu! nibr mhxi! !xpgl") // vghj bidmo jgbmzn nibr
remove("!jltaoy! inrmnh zbfaim") // !jltaoy! inrmnh zbfaim

function remove(str){
    const arr = str.split(' ')
    let result = ""


   for (let word of arr){
    let count = 0

    for (let i = 0; i < word.length; i++){
        if (word[i] === '!')
            count++
    }
    if (count > 1){
        return word
    }
   }

   for (let i = 0; i < arr.length; i++){
    if (arr[i].includes('!')){
        return ""
    } else {
        result += " " + arr[i]
        console.log(result)
    }
   }
   
}
