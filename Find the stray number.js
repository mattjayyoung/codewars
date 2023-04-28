// Finding the stray number - 7kyu (Apr 27th)

// PREP

//P - array of integers, odd length, all are the same except one
//R - return the different number


function stray(numbers) {
  const sortedNum = numbers.sort()
  return sortedNum[0] === sortedNum[1] ? sortedNum [sortedNum.length - 1] : sortedNum[0]
  
}


//E

stray([1, 1, 2]) // 2
stray([17, 17, 3, 17, 17, 17, 17]) // 3
stray([1, 1, 2]) // 2
stray([1, 2, 1]) // 2
stray([2, 1, 1]) // 2

//P

/*

Sort the numbers
If the first element is the same as the second element (which is the same as the majority number), return the last element, else return the first element


*/