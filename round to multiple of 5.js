// Round up to the next multiple of 5 - 7kyu (Apr 16th)

//P - number, pos or neg, 
//R - round it to next multiple of 5
//P

function roundToNext5(n){
  while (n % 5 !== 0){
    n++
  }
  return n
}


//E


roundToNext5(0) // 0
roundToNext5(1) // 5
roundToNext5(-1) // 0
roundToNext5(-5) // -5
roundToNext5(3) // 5
roundToNext5(5) // 5
roundToNext5(7) // 10
roundToNext5(20) // 20
roundToNext5(39) // 40
roundToNext5(990) // 990
roundToNext5(121) // 125
roundToNext5(555) // 555