// Elevator Distance - 7kyu (October 30th)

function elevatorDistance(array) {

  let result = 0

  for (let i = 0; i < array.length - 1; i++){
    result += Math.abs(array[i] - array[i + 1])
  }

  return result
}

elevatorDistance([5,2,8]) // 9);
elevatorDistance([1,2,3]) // 2);
elevatorDistance([7,1,7,1]) // 18);