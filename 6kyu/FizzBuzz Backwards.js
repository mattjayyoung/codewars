// FizzBuzz Backwards = 6kyu (November 23rd)

function reverseFizzBuzz(array) {
  fizzMultiple = array.indexOf('Fizz') + 1
  buzzMultiple = array.indexOf('Buzz') + 1
  fizzbuzzMultiple = array.indexOf('FizzBuzz') + 1


  if (!buzzMultiple && !fizzMultiple){
    return [fizzbuzzMultiple, fizzbuzzMultiple]

  } else if (!buzzMultiple){
    
    return [fizzMultiple, fizzbuzzMultiple]

  } else if (!fizzMultiple){
    return [fizzbuzzMultiple, buzzMultiple]
  }

  return [fizzMultiple, buzzMultiple]
}

reverseFizzBuzz([1,"FizzBuzz",3,"FizzBuzz",5,"FizzBuzz"]) // [2,2]);
reverseFizzBuzz([1,"Fizz","Buzz","Fizz",5,"FizzBuzz"]) // [2,3]);
reverseFizzBuzz([1,2,"Fizz",4,"Buzz"]) // [3,5]);

reverseFizzBuzz(["Fizz","Fizz","Fizz","Fizz","Fizz","FizzBuzz"]) // [1,6]);


