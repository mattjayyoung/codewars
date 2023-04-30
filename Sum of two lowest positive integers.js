// Sum of two lowest positive integers - 7kyu (Apr 30th)

//PREP

//P - array of positive integers, minimum array.length >= 4
//R - sum of lowest positive integers

function sumTwoSmallestNumbers(numbers) {  
  const sortedNumbers = numbers.sort((a,b) => a - b)

  return sortedNumbers[0] + sortedNumbers[1]
}

//E

sumTwoSmallestNumbers([19, 5, 42, 2, 77]) // 7
sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]) // 3453455
sumTwoSmallestNumbers([5, 8, 12, 19, 22]) // 13

//P

/*

-Sort numbers from lowest to highest
-Add the first two numbers of the array

*/