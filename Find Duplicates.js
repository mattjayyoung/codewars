// Find Duplicates - 7kyu (June 11th)

function duplicates(arr){
  let uniqueArr = []
  let resultsArr = []

  for(let i = 0; i < arr.length; i++){
    if (uniqueArr.indexOf(arr[i]) === -1){
      uniqueArr.push(arr[i])
    } else {
      resultsArr.push(arr[i])
    }
  }
  return Array.from(new Set(resultsArr))
}

/*

if not found in array, push it into uniqueArr
if found in array, put into resultsArray

*/


duplicates([1, 2, 3, 4, 5]) // []
duplicates([]) // [], "arr = []")
duplicates(['no', 'duplicates', 'here'])

duplicates([1, 2, 3, 3, 2, 1]) // [3, 2, 1]
duplicates([1, 2, 1, 2, 1, 2, 1]) // [1, 2]


duplicates(['1', 2, 3, 3, '2', 1]) // [3]
duplicates([1, 2, 3, 4, 3]) // [3]



function duplicates(arr) {
  let duplicateArr = []

  const nums = arr.reduce((obj,item) => {
    if (!obj[item]){
      obj[item] = 0
    }
    obj[item]++
    return obj
  }, {})

  for (let prop in nums){
    if (nums[prop] > 1){
      duplicateArr.push(Number(prop))
    }
  }
  return duplicateArr
}
