// Dominant Array Elements - 7kyu (October 21st)

function solve(arr) {

  let newArr = []

  let i = 0
  let j = 1
  while (i < arr.length - 1){
    if (arr[i] <= arr[j]){
      i++
      j = i + 1
    } else {
      if (j === arr.length - 1){
        newArr.push(arr[i])
        i++
        j = i + 1
      } else {
        j++
      }
    }
  }
newArr.push(arr[arr.length - 1])
  return newArr

}

solve([16,17,14,3,14,5,2]) // [17,14,5,2]],
solve([92,52,93,31,89,87,77,105]) //  [105]

    [[75,47,42,56,13,55], [75,56,55]],
    [[67,54,27,85,66,88,31,24,49], [88,49]],
    [[76,17,25,36,29], [76,36,29]],
    [[104,18,37,9,36,47,28], [104,47,28]],