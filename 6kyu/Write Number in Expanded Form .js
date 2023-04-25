// Write Number in Expanded Form - 6kyu (Apr 25th)

//PREP

//P - number, always positive, always whole numbers
//R - returning the number as a string with ' + ' between each number
//P

function expandedForm(num) {
  /*
  1. calculate num.length
  2. *loop* through number* concatenate number with 0s based on index.
  3. Push numbers > 0 into an array
  4. array.join(' + ')
  */
 let numbers = num.toString().split('').map(el => Number(el)).reverse()
 let zero = ""
 let newArray = []

 for (let i = 0; i < numbers.length; i++){
  let addZero = numbers[i] + zero
  zero += "0"
  newArray.push(Number(addZero))
 }
 
 return newArray.reverse().filter(num => num > 0).join(' + ')
 
}


expandedForm(70304) // '70000 + 300 + 4';


//E 
expandedForm(12) // '10 + 2');
expandedForm(42) // '40 + 2');
expandedForm(70304) // '70000 + 300 + 4';
