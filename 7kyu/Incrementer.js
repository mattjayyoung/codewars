// Incrementer - 7kyu (January 10th)

function incrementer(nums) { 
  const incremented = nums.map((num, i) => num + i + 1)
  
  const converted = incremented.map(num => {
    if (num.toString().length > 1){
      return Number(num.toString()[num.toString().length - 1])
    } else {
      return num
    }
  })

  return converted
}


incrementer([1, 2, 3]) //  [2, 4, 6]
incrementer([4, 6, 7, 1, 3]) // [5, 8, 0, 5, 8]));
incrementer([3, 6, 9, 8, 9]) // [4, 8, 2, 2, 4]));
incrementer([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]) //  [2, 4, 6, 8, 0, 2, 4, 6, 8, 9, 0, 1, 2, 2]));
10
});