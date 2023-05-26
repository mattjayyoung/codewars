// Number format - 6kyu (May 26th)

function numberFormat (number) {
  const reverseNum = Math.abs(number).toString().split('').reverse()

  for (let i = 3; i < reverseNum.length; i+=4){
    reverseNum.splice(i, 0, ',')
  }
  
  if (number < 0){
    return "-" + reverseNum.reverse('').join('')
  } else {

  return reverseNum.reverse('').join('')
  }

  
};


numberFormat(100000) // '100,000'
numberFormat(5678545) // '5,678,545'

numberFormat(-420902) // -420,902