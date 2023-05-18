Product of consecutive Fib numbers - 5kyu (May 18th)

function productFib(prod){
  
  let fibo = [0, 1, 1]

for (let i = 3; i < 3000; i++){
  fibo[i] = fibo[i - 1] + fibo[i - 2]
  fibo.push(fibo[i])

  if (fibo[i] * fibo[i - 1] === prod){
    return ([fibo[i - 1],fibo[i], true])
  } else if (fibo[i] * fibo[i - 1] > prod){
    return([fibo[i - 1], fibo[i], false])
  }
}
}