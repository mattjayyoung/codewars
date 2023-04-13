// Equal Sides Of An Array - 6kyu (Apr 13th)

// PREP - Parameters, Return, Example, Pseudocode

//P - array of integers (+ or -), num between 0 and 1000
//R - return index, where sum of left side and right side equal each other; if no index makes this happen, return - 1

function findEvenIndex(arr){
  
  for (let i = 0; i < arr.length; i++){

    let sumLeft = 0
    let sumRight = 0
    //Sum of left side
  if (i === 0){
    sumLeft = 0
  } else {
    for(let j = 0; j < i; j++){
      sumLeft += arr[j]
      
    }
  }

    // Sum of right side
    for (let k = i + 1; k < arr.length; k++) {
      sumRight += arr[k]
      
  }

  if (sumLeft === sumRight){
    return i
  } else if (sumLeft !== sumRight && i === arr.length - 1){
    return -1
  }

}

}

(loop/iterate through array.length - start with index 0)
(find sum of left of index and find sum of right of index)
(conditional - both sums are diff, move on to the next index - always index 0 to chosen index, and chosen index to array.length - 1, if both sums are the same, return index)

//E
findEvenIndex([1,2,3,4,3,2,1]) // Index 3
findEvenIndex([1,100,50,-51,1,1]) // Index 1
findEvenIndex([1,2,3,4,5,6]) // -1
findEvenIndex([20,10,30,10,10,15,35]) // Index 3

// Refactored using GPT

function findEvenIndex(arr) {
  let leftSum = 0;
  let rightSum = arr.reduce((a, b) => a + b, 0); // Sum of entire array

  for (let i = 0; i < arr.length; i++) {
    rightSum -= arr[i]; // Subtract current element from right sum
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += arr[i]; // Add current element to left sum
  }

  return -1;
}