// Smallest value of an array - 7kyu (December 7th)

function min(arr, toReturn) {
  if (toReturn === 'value'){
    return Math.min(...arr)
  } else {
    return arr.indexOf(Math.min(...arr))
  }
}

min([1,2,3,4,5], 'value') // 1)
min([1,2,3,4,5], 'index') // 0)