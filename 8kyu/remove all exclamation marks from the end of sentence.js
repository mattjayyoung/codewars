function remove(string) {  

  let arr = Array.from(string)
  
  while (arr.join(',').endsWith('!')){
    arr.splice(arr.length - 1, 1)
  }

  return arr.join('')

}

remove("Hi!")//  "Hi")
remove("Hi!!!") // "Hi")
remove("!Hi") // "!Hi")
remove("!Hi!") // "!Hi")
remove("Hi! Hi!") // "Hi! Hi")
remove("Hi") // "Hi")
remove("kiqp!!!!!!") // 'kiqp'