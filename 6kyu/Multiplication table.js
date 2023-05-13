Multiplication table

function multiplicationTable (size) {
  let multiTable = []
  let firstArray = []

  for (let i = 1; i <= size; i++){
    firstArray.push(i)
  }

multiTable.push(firstArray)

 for (let i = 2; i <= size; i++){
  multiTable.push(firstArray.map(el => el * i))
 }
 return multiTable

}



multiplicationTable(3) // [[1,2,3], [2,4,6], [3,6,9]]
multiplicationTable(4) // [[1,2,3, 4], [2,4,6, 8], [3,6,9, 12]]
multiplicationTable(10) // [[1,2,3,4, 5,6,7,8,9,10], [2,4,6, 8], [3,6,9, 12]]

