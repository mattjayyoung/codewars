// Substituting Variables Into Strings: Padded Numbers (7kyu) - February 16th

function solution(value){
  if (value.toString().length === 5){
    return `Value is ${value}`
  } else if (value.toString().length === 4){
    return `Value is 0${value}`
  }else if (value.toString().length === 3){
    return `Value is 00${value}`
  }else if (value.toString().length === 2){
    return `Value is 000${value}`
  }else if (value.toString().length === 1){
    return `Value is 0000${value}`
  }
}