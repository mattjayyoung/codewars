// Largest pair sum in array - 7kyu (August 15th)

function largestPairSum (numbers) {
  let sorted = numbers.sort((a,b) => a - b)

  return sorted[sorted.length - 1] + sorted[sorted.length - 2]


}


largestPairSum([10,14,2,23,19]) // 42
largestPairSum([-100,-29,-24,-19,19]) // 0
largestPairSum([1,2,3,4,6,-1,2]) // 10
largestPairSum([-10, -8, -16, -18, -19]) // -18