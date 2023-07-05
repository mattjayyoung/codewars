// Simple remove duplicates - 7kyu (July 5th)

function solve(arr) {
  
let uniqueNums = []

  arr.reverse().forEach(item => {
    if (!uniqueNums.includes(item)){
      uniqueNums.unshift(item)
    }
  })

return uniqueNums
  
}



solve([3,4,4,3,6,3]) // [4,6,3]
solve([1,2,1,2,1,2,3]) // [1,2,3]
solve([1,2,3,4]) // [1,2,3,4]
solve([1,1,4,5,1,2,1]) //[4,5,2,1]
solve([1,2,1,2,1,1,3])// [2,1,3]