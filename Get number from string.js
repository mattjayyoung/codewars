// Get Number From String (8kyu) - November 15th

function getNumberFromString(s) {
  return Number(s.match(/[0-9]/ig).join(''))
}

getNumberFromString("this is number: 7")
getNumberFromString("hell5o wor6ld")