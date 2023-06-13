function isOddHeavy(n){
    if (n.every(el => el % 2 === 0)){
        return false
    }
    
    let evenArr = []
    let oddArr = []

    n.forEach(el => el % 2 === 0 ? evenArr.push(el) : oddArr.push(el))

    let smallestOdd = Math.min(...oddArr)

    for(let i = 0; i < evenArr.length; i++){
        if (evenArr[i] > smallestOdd){
            return false
        }
    }

    return true
}



isOddHeavy([0,2,19,4,4]) // true
isOddHeavy([1,-2,-1,2]) // false

isOddHeavy([11,4,9,2,8]) // true
// because its odd elements [11,9] are greater than all the even elements [4,2,8]

isOddHeavy([11,4,9,2,3,10]) // false
// because one of its even elements (10 from [4,2,10]) is greater than two of
// its odd elements (9 and 3 from [11,9,3])

isOddHeavy([]) // false
// because it does not contain any odd numbers

isOddHeavy([3]) // true