function pipeFix(numbers){
    let lastIndex = Math.max(...numbers)
    let firstIndex = Math.min(...numbers)
    let result = []

    console.log(firstIndex)
    console.log(lastIndex)

    for (let i = firstIndex; i <= lastIndex; i++){
        result.push(i)
    }

    return result

}


pipeFix([1,2,3,5,6,8,9])// [1,2,3,4,5,6,7,8,9]
pipeFix([1,2,3,12]) // [1,2,3,4,5,6,7,8,9,10,11,12]
pipeFix([6,9]) //[6,7,8,9] 
pipeFix([-1,4]),[-1,0,1,2,3,4]