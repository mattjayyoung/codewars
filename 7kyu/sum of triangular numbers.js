// Sum of Triangular Numbers - 7kyu (October 13th)

function sumTriangularNumbers(n) {
  
  let sum = 0
  let base = 0

  for (let i = 1; i <= n; i++){
    
    let additive = i + base
    base = additive
    
    sum += additive

  }

  return sum // 20
  
}

sumTriangularNumbers(824)

sumTriangularNumbers(1) // 1
sumTriangularNumbers(2) // 4
sumTriangularNumbers(3) // 10
sumTriangularNumbers(4) // 20
sumTriangularNumbers(6) // 56
sumTriangularNumbers(34) // 7140
sumTriangularNumbers(-291) // 0
sumTriangularNumbers(943) // 140205240
sumTriangularNumbers(-971) // 0