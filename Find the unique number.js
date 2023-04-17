// Find the unique number (6kyu) - Apr 17th

//PREP

//P - arr of numbers, at least 3 numbers, all numbers are the same, except for 1
//R - return the different number
//P

function findUniq(arr) {
  //sort the numbers by value
  return Number(arr.sort((a,b) => a - b).filter((num, index, arr) => num !== arr[1]))

  

  // find out which value is same number by taking index[1]

  //filter out the value
}

findUniq([ 1, 1, 1, 2, 1, 1 ])
findUniq([ 1, 1, 2, 1, 1 ]) // 2
findUniq([ 3, 10, 3, 3, 3 ]) //10


//E


function test(arr){
  let newArr = [...arr]
  console.log(newArr)
}