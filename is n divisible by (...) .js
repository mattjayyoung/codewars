// is n divisible by (...)- 7kyu (Sept 5th)

function isDivisible(){
  let args = Array.from(arguments)

  for (let i = 0; i < args.length; i++){
    if (args[0] % args[i] !== 0){
      return false
    }
  }
  return true
  
}

isDivisible(6,1,3) // true because 6 is divisible by 1 and 3
isDivisible(12,2) // true because 12 is divisible by 2
isDivisible(100,5,4,10,25,20) // true
isDivisible(12,7) // false because 12 is not divisible by 7
