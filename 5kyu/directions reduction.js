// Directions Reduction - 5kyu (May 24th)
function dirReduc(arr){
  
  for (let i = 0; i < arr.length; i++){
  if (arr[i] === 'NORTH' && arr[i + 1] === 'SOUTH'){
    arr.splice(i,2)
  } else if (arr[i] === 'SOUTH' && arr[i + 1] === 'NORTH'){
    arr.splice(i,2)
  } else if (arr[i] === 'EAST' && arr[i + 1] === 'WEST'){
    arr.splice(i,2)
  } else if (arr[i] === 'WEST' && arr[i + 1] === 'EAST'){
    arr.splice(i,2)
  }
  }
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === 'SOUTH' && arr[i + 1] === 'NORTH'){
      arr.splice(i,2)
    } else if(arr[i] === 'EAST' && arr[i + 1] === 'WEST'){
      arr.splice(i,2)
  } else if(arr[i] === 'NORTH' && arr[i + 1] === 'SOUTH'){
    arr.splice(i,2)
  }else if(arr[i] === 'WEST' && arr[i + 1] === 'EAST'){
    arr.splice(i,2)
  } 
  }

  for (let i = 0; i < arr.length + 1; i++){
    if (arr[i] === 'SOUTH' && arr[i + 1] === 'NORTH'){
      arr.splice(i,2)
    } else if(arr[i] === 'EAST' && arr[i + 1] === 'WEST'){
      arr.splice(i,2)
  } else if(arr[i] === 'NORTH' && arr[i + 1] === 'SOUTH'){
    arr.splice(i,2)
  }else if(arr[i] === 'WEST' && arr[i + 1] === 'EAST'){
    arr.splice(i,2)
  } 
  
} 
return arr
}

dirReduc(["NORTH","EAST","NORTH","EAST","WEST","WEST","EAST","EAST","WEST","SOUTH"]) // [ 'NORTH', 'EAST' ]

dirReduc(["EAST","EAST","WEST","NORTH","WEST","EAST","EAST","SOUTH","NORTH","WEST"]) // [ 'EAST', 'NORTH' ]



dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) // ["WEST"]
  
dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]) // ["NORTH", "WEST", "SOUTH", "EAST"]

dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]) // []