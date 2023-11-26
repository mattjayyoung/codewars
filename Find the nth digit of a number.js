// Find the nth Digit of a Number - 7kyu (November 26th)

function findDigit (num, nth){
    
    if (nth <= 0) return -1
    num = Math.abs(num)
  
  num = num.toString().split('').reverse()

return num[nth - 1] ? Number(num[nth - 1]) : 0 

}

findDigit(5673, 4)// 5
findDigit(129, 2)// 2
findDigit(-2825, 3)// 8
findDigit(-456, 4)// 0
findDigit(0, 20)// 0
findDigit(65, 0) //-1
findDigit(24, -8) //-1