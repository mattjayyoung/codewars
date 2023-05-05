// Sort the odd - 6kyu (May 5th)

function sortArray(array) {
  let oddArr = array.filter(num => num % 2 !== 0).sort((a,b) => a - b)
  console.log(oddArr)
  console.log(array)

  for (let i = 0; i < array.length; i++){
    if (array[i] % 2 !== 0){
      let oddNum = oddArr.shift()
      array.splice(i, 1, oddNum)
  }
}
return array
}

sortArray([1, 11, 2, 8, 3, 4, 5]) // [ 1, 3, 2, 8, 5, 4, 11 ]

sortArray([5, 3, 1, 8, 0]) // [1, 3, 5, 8, 0]


/*

-take out the odd numbers and replace with 0's and place these numbers into a new array
-sort the new array
-placee those numbers from the new array into the old array by replacing the 0


*/

sortArray([5, 3, 2, 8, 1, 4]) // [1, 3, 2, 8, 5, 4]