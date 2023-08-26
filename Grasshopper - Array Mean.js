// Grasshopper - Array Mean - 8kyu (August 25th)

var findAverage = function (nums) {
  
  
  let total = nums.reduce((acc,curr) => acc + curr)
  
  return total / nums.length
}