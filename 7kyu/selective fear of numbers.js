// Selective fear of numbers - 7kyu - August 20th

function AmIAfraid(day, num){
  if (day === "Monday" && num === 12){
    return true
  } else if (day === 'Tuesday' && num > 95){
    return true
  } else if (day === 'Wednesday' && num === 34){
    return true
  } else if (day === 'Thursday' && !num){
    return true
  } else if (day === 'Friday' && num % 2 === 0){
    return true
  } else if (day === 'Saturday' && num === 56){
    return true
  } else if (day === 'Sunday' && Math.abs(num) === 666){
    return true
  } else {
    return false
  }
}

AmIAfraid("Monday", 13) // false
AmIAfraid("Sunday", -666) // true,  
AmIAfraid("Tuesday", 2) // false,  
AmIAfraid("Tuesday", 965) // true
AmIAfraid("Friday", 2) // true,  
