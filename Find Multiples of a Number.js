// Find Multiples of a Number - 8kyu (July 1st)

function findMultiples(integer, limit) {
  let arr = []
 

  for (let i = integer; i <= limit; i++){
    if (i % integer === 0){
      arr.push(i)
    }
  }
  return arr
}

findMultiples(2,6)