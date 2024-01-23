// Get the mean of an array - 8kyu (January 22nd)

function getAverage(marks){
  return Math.floor((marks.reduce((acc, curr) => acc + curr)) / marks.length)
}