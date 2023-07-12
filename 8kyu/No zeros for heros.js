function noBoringZeros(n) {
  let arr = Array.from(n.toString()).map(num => Number(num))
  
  while (arr[arr.length - 1] === 0){
    arr.pop()
  }

  return Number(arr.filter(num => num >= 0).join('')) * Math.sign(n)

}


noBoringZeros(1450) // 145
noBoringZeros(960000) // 96
noBoringZeros(1050) // 105
noBoringZeros(-1050) // -105