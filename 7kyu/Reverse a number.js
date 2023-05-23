// Reverse a Number (7kyu) - May 22nd

function reverseNumber(n) {
  
  if (n < 0){
    const posNum = Math.abs(n)
    return Number(posNum.toString().split('').reverse().join('')) * -1
  } else {
    return Math.abs(Number(n.toString().split('').reverse().join('')))
  }

}


reverseNumber(123) // 321)
reverseNumber(-123) // -321, 'Negative Numbers should be preserved'
  reverseNumber(1000) // 1, 'Should handle numbers ending with "0"')
  reverseNumber(4321234) // 4321234
  reverseNumber(5) // 5
  reverseNumber(0) // 0
  reverseNumber(98989898) // 89898989