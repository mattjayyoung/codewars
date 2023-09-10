// Beginner Series #3 Sum of Numbers (7kyu) - Sept 10th

function getSum(a, b){
  let sum = 0 

  if (a < b){
    while (a <= b){
      sum += a
      a++
    }
  } else if (b < a) {
    while (b <= a){
      sum += b
      b++
    }
  } else {
    return a


  }
  return sum

}

getSum(0,-1) // -1
getSum(0, 1) //  1
getSum(2, 2) //  2
getSum(5, -1) // 14
getSum(-127,-127) // 127