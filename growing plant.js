// Simple Fun #74 = Growing Plant - 7kyu (July 26th)

function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let startingHeight = 0
  let day = 0

  while (startingHeight < desiredHeight){
    day++
    startingHeight += upSpeed
    if (startingHeight >= desiredHeight){
      return day
    }
    startingHeight -= downSpeed
    if (startingHeight >= desiredHeight){
      return day
    }  
  }
  
}

growingPlant(100,10,910) // 10

growingPlant(10,9,4) // 1