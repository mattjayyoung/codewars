// Sum of Cubes - 7kyu (November 19th)

function sumCubes(n){
  let sum = 0
  for (let i = 1; i <= n; i++){
    let num = i ** 3
    console.log(num)
    sum += num
  }
  return sum
}

sumCubes(2) // 1^2 + 2^ 29