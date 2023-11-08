// Sum of Minimums - 7kyu (November 8th)

function sumOfMinimums(arr) {
  return arr.reduce((acc,miniArr) => acc + Math.min(...miniArr), 0)
}