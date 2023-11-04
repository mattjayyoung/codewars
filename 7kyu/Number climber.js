// Number climber (7kyu) - November 4th

function climb(n){
  // if (n / 2) is not an integer, -0.5
  // add result to array

  let result = [n]
  let num = n

  for (let i = num / 2; i > 1; i /= 2)
  if (n === 1){
    result.unshift(n)
    return result
  } else if (Number.isInteger(i)){
    result.unshift(i)
  } else {
    result.unshift(Math.floor(i))
  }

  return result
}

climb(1) // [1]);
climb(10) // [1, 2, 5, 10]);
climb(13) // [1, 3, 6, 13]);
climb(100) // [1, 3, 6, 12, 25, 50, 100]