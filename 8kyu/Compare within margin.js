// Compare within margin (8kyu) - Feb 25th

function closeCompare(a, b, margin = 0){
  if (margin && Math.abs(b - a) <= margin){
    return 0
  } else if (a < b){
    return -1
  } else if (a > b) {
    return 1
  } else {
    return 0
  }
}

closeCompare(5, 5) // 0)



closeCompare(8.1, 5, 3) // 1)
closeCompare(1.99, 5, 3) // -1)
closeCompare(4, 5) // -1)
closeCompare(6, 5) // 1)
closeCompare(-6, -5) // -1)
closeCompare(2, 5, 3) // 0)
