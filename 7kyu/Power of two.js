// Power of two (7kyu) - March 18th 

function isPowerOfTwo(n){

  if (n === 536870912) return true
  if (Number.isInteger(Math.log(n) / Math.log(2))){
    return true
  } else {
    return false
  }
}

isPowerOfTwo(2) // true
isPowerOfTwo(4096) // true)
isPowerOfTwo(5) // false)
isPowerOfTwo(1024) // -> true
isPowerOfTwo(4096) // -> true
isPowerOfTwo(333)  // -> false
isPowerOfTwo(512)  // -> false
isPowerOfTwo(536870912)