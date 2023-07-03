//how many consecutive numbers are needed (7kyu) - July 3rd

function consecutive(arr) {

    let count = 0
    let minNum = Math.min(...arr)
    let maxNum = Math.max(...arr)

    for (let i = minNum; i <= maxNum; i++){
        if (arr.indexOf(i) === -1){
          count++
        }
        }
    

    return count
}


consecutive([4,8,6]) // 2
consecutive([1,2,3,4]) // 0
consecutive([]) // 0
consecutive([1]) // 0