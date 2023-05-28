// The Coupon Code - 7kyu (May 28th)

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if (enteredCode === correctCode){
    let d1 = Date.parse(currentDate)
    let d2 = Date.parse(expirationDate)

    return d1 <= d2 ? true : false
  } else {
    return false
  }
}




checkCoupon('123','123','September 5, 2014','October 1, 2014') // true
checkCoupon('123a','123','September 5, 2014','October 1, 2014') // false