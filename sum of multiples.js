// Sum of Multiples (8kyu) - June 29th

function sumMul(n,m){
  let sum = 0
  if (n <= 0 || m <= 0){
    return "INVALID"
  } else {
    for (let i = n; i < m; i += n){
      sum += i
    }
  }
  return sum
}


sumMul(0,0) // "INVALID"
sumMul(2,9) // 20;
sumMul(4,-7) // "INVALID"