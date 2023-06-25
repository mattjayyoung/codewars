// Delete occurrences of an element if it occurs more than n times (6kyu) - June 25th 

function deleteNth(arr,n){



let counts = arr.reduce((obj,item) => {
  if (!obj[item]){
    obj[item] = 0
  }
  obj[item]++
  return obj

},{})

  for (let props in counts){
    if (counts[props] > n){
      let duplicate = arr.lastIndexOf(Number(props))
      arr.splice(duplicate, 1)
    }
  }
    for (let i = 0; i < 50; i++){
      counts = arr.reduce((obj,item) => {
        if (!obj[item]){
          obj[item] = 0
        }
        obj[item]++
        return obj
      
      },{})

      for (let props in counts){
        if (counts[props] > n){
          let duplicate = arr.lastIndexOf(Number(props))
          arr.splice(duplicate, 1)
        }
      }

    }
  
  return arr
}

deleteNth([20,37,20,21], 1) // [20,37,21]
deleteNth([1,1,3,3,7,2,2,2,2], 3) // [1, 1, 3, 3, 7, 2, 2, 2]
deleteNth([9, 9, 26, 45, 45, 9, 9, 45, 9, 45, 9, 26, 9, 26, 45, 45, 45, 45,  9, 26, 45, 45,  9], 6)

deleteNth([13,13,45,40,45,5,40,45,13,13,45,13,45,13,45,44,44,40,13,13,45,14,13,40,40,44,40,14,40,40,13,13,14,14,13,13,5,14,13,13,13,14], 3)

deleteNth([30,36,21,21,20,20,20,21,21,17,21,28,20,21,36,36,28,18,25,17,21,21,21,21,21,21,30,30,36,21,28,29,18,30,25,17,29,18,25,17,25,20,21,36,29,21,21,20,21,20,20,25,25], 1)