// Two Sum (6kyu) - Apr 26

//P - array of nums, target value; array.length >= 2; all items are numbers
//R - return the indices (indexes) of 2 items in the arry that equal the sum of the target value

function twoSum(numbers, target) {
  
  let sumOfIndices = []
  
  for (let i = 0; i <= numbers.length - 2; i++){
    for (let j = 1; j < numbers.length; j++){
      if (numbers[i] + numbers[j] === target && i !== j){
        sumOfIndices.push(i)
        sumOfIndices.push(j)
        return sumOfIndices
      }
      
    }
  } 
  }

  
/*

*loop* through array, adding i +
-numbers[0] + numbers[1]
-numbers[0] + numbers[2]
-numbers[1] + numbers[2]

*/  


//E

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
twoSum([1234,5678,9012], 14690) // [1,2]
twoSum([2,2,3], 4) // [0,1]
twoSum([2,3,1], 4) // [1,2]
