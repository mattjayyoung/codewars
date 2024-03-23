// Training JS #8: Conditional statement--switch - 8kyu (March 23rd)

function howManydays(month){
  let days;
  switch (month){
      case 1: 
      days = 31
      break
      case 2:
      days = 28
      break
      case 3: 
      days = 31
      break
      case 4: 
      days = 30
      break
      case 5: 
      days = 31
      break
            case 6: 
      days = 30
      break
            case 7: 
      days = 31
      break
        case 8: 
      days = 31
      break
      case 9: 
      return 30
      break
      case 10: 
      return 31
      break
      case 11: 
      return 30
      break
      case 12: 
      return 31
      break
  
  }
  return days;
}