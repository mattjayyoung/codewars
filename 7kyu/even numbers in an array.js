// Even Numbers in an array - 7kyu (Aug 26th)

function evenNumbers(array, number) {
  
  let evenNumbers = []
  let reverseArr = array.reverse()
  let i = 0

  while (evenNumbers.length < number){
    if (reverseArr[i] % 2 === 0){
      evenNumbers.unshift(reverseArr[i])
    }
    i++
  }

  return evenNumbers
}


evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) // [4, 6, 8]
evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) // [-8, 26]
evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) // [6]