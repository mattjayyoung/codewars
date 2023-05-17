// Make a function that does arithmetic - 7kyu (May 17th)

function arithmetic(a, b, operator){
  switch(operator){
    case 'add':
      return a + b
    break;
    case 'subtract':
      return a - b
    break;
    case 'multiply':
      return a * b
    break;
    case 'divide':
      return a / b
  } 
}


arithmetic(5, 2, "add") // 7
arithmetic(5, 2, "subtract") // 3
arithmetic(5, 2, "multiply") // 10
arithmetic(5, 2, "divide") // 2.5