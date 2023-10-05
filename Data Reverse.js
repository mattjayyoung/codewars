// Data Reverse - 6kyu (October 5th)

function dataReverse(data) {
  let totalArr = []
  let lengthOfData = data.length

  for (let i = 0; i < lengthOfData; i += 8){
    let arr = data.slice(i, i + 8)
    totalArr.unshift(arr)
  }
  return totalArr.flat()
}

dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]) // 10101010  00001111  00000000  11111111

[ 1, 1, 1, 1, 1, 1, 1, 1, 
  0, 0, 0, 0, 0, 0, 0, 0, 
  0, 0, 0, 0, 1, 1, 1, 1, 
  1, 0, 1, 0, 1, 0, 1, 0 ]

dataReverse([ 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1])

[ 0, 0, 1, 1, 0, 1, 1, 0, 
  0, 0, 1, 0, 1, 0, 0, 1]

// [ 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0 ]

11111111  00000000  00001111  10101010
10101010  00001111  00000000  11111111