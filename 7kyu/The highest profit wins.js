// The highest profit wins! (7kyu) - May 23rd

function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)]; // fix me!
}



minMax([1, 2, 3, 4, 5]) // [1, 5],
minMax([2334454, 5]) // [5, 2334454]
minMax([5]) // [5, 5]