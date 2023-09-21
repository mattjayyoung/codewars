// Powers of 2 (8kyu) - Sept 21st

function powersOfTwo(n){
  let arr = []

  for (let i = 0; i <= n; i++){
    arr.push(Math.pow(2, i))
  }

  return arr
  
}

powersOfTwo(0) // [1]
powersOfTwo(1) // [1, 2]
powersOfTwo(4) // [1, 2, 4, 8, 16]