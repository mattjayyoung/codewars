// Filter the number - 7kyu (December 10th)

function filterString(value) {
  let result = value.match(/[^a-z]/g)
  return Number(result.join(''))
}

filterString("123") // 123 
filterString("a1b2c3") // 123, 
filterString("aa1bb2cc3dd") // 123 