// Are they the "same"? - 6kyu (Apr 28th)

//PREP

//P - two arrays of integers
//R - boolean: true if every number in array2 is the square root of a number in array1


function comp(array1, array2){
    
    if (!array1 || !array2){
        return false
    } else {
    
    const sortedArray1 = array1.sort((a,b) => {return a - b})
    const sortedArray2 = array2.sort((a,b) => {return a - b})

    console.log(sortedArray1)
    console.log(sortedArray2)

    return !sortedArray1.length || !sortedArray2.length ? true : sortedArray2.every((el, index) => el === (Math.pow(sortedArray1[index], 2)))
    }
}


//E

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

comp(a1, a2)

//P

/*
1. Sort both arrays. We sort both so that the squared numbers are aligned in the same index
2. Use the every method to see if the elements in array1 match the elements in array2 to the power of 2

*/
