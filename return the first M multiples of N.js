// Return the first M multiples of N - 7kyu (March 8th)

function multiples(m, n){
  let result = []
  for (let i = 1; i <= m; i++){
    result.push(i * n)
  }
  
  
  return result
}