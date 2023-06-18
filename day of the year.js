//Day of the Year

function toDayOfYear(arr) {

  let days = 0
  //toDayOfYear([25, 12, 2017])// 359
  if (arr[1] > 7){
    
    for (let i = 8; i < arr[1]; i++){
      if (i % 2 === 0){
        days += 31
      } else {
        days += 30
      }
    }

    for (let i = 1; i < 8; i++){
      if (i % 2 !== 0){
        days += 31
      } else {
        days += 30
      }
    }

  } else {
    for (let i = 1; i < arr[1]; i++){
      if (i % 2 !== 0){
        days += 31
      } else {
        days += 30
      }
    }
  }

  days += arr[0]
  
  if (arr[1] > 2 || arr[1] === 2 && arr[0] >= 28){
    console.log('leap year or not')

    if (arr[2] % 4 !== 0 || arr[2] % 100 === 0 && arr[2] % 400 !== 0){
      days -= 2
    } else if (arr[1] >= 2){
      days -= 1
    }
  }
  return days
}

toDayOfYear[28,2,2640] // 59

toDayOfYear([14,2,2183]) // 45
toDayOfYear([5, 11, 1604])// 310
toDayOfYear([25, 12, 2017])// 359
toDayOfYear([31, 10, 1991])// 304

toDayOfYear([1, 5, 3000])// 121

toDayOfYear([14, 3, 1066])// 73

/*

Loop through months 01 - 07, if odd, add 31 days, if even add 30 days (except for February)
Loop through months 08 - 12, if odd, add 30 days, if even add 31 days 

if year can be evenly divided by 4 && if year is evenly divisible by 400 => LEAP YEAR
if year is divisible by 100 => NOT A LEAP YEAR

*/

// January(01) - 31
// February(02) - 28
// March(03) - 31
// April(04) - 30
// May(05) - 31
// June(06) - 30
// July(07) - 31
// August(08) - 31
// September (09) - 30
// October(10) - 31
// November(11) - 30
// December(12) - 31  

