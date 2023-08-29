// Tail Swap - 7kyu (August 29th)

function tailSwap(arr) {
  let nestedArr = arr.map(str => str.split(":"))

  let placeholder = nestedArr[0][1]
  nestedArr[0][1] = nestedArr[1][1]
  nestedArr[1][1] = placeholder

  return nestedArr.map(str => str.join(":"))

}

tailSwap(["abc:123", "cde:456"]) // -->  ["abc:456", "cde:123"]
tailSwap(["a:12345", "777:xyz"]) //  -->  ["a:xyz", "777:12345"]