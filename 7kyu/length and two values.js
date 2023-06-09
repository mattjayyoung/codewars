function alternate(n, firstValue, secondValue){
  let arr = []
  for (let i = 0; i < n; i++){
    i % 2 === 0 ? arr.push(firstValue) : arr.push(secondValue)
    } 
    return arr
}


alternate(5, true, false)     -->  [true, false, true, false, true]
alternate(10, "blue", "red")  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
alternate(0, "one", "two")    -->  []