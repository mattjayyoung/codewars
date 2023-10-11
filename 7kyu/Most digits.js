// Most digits - 7kyu (October 11th)

function findLongest(array){
  const numLengths =  array.map((num) => num.toString().length)
const index = Math.max(...numLengths)
return array.find(num => num.toString().length === index)


    
}

findLongest([1, 10, 100]) // 100
findLongest([9000, 8, 800]) // 9000
findLongest([8, 900, 500]) // 900)