// Your order, please = 6kyu (July 13th)

function order(words){
    let result = []
    let arr = words.split(' ')

    for (let word of arr){
        if (word.match(/\d/ig)){
            let index = word.match(/\d/ig)
            result[index] = word
        }
    }

    return result.join(' ').trim()
  
}




order("is2 Thi1s T4est 3a") // "Thi1s is2 3a T4est"
order("4of Fo1r pe6ople g3ood th5e the2") // "Fo1r the2 g3ood 4of th5e pe6ople"
order("") // "", "empty input should return empty string" 


function sortWithin(word){
    return word.split('').sort()
}

sortWithin('Thi1s')