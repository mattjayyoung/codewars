// Find the first non-consecutive number - 8kyu (October 6th)

function firstNonConsecutive (arr) {
    let difference = 1
    

    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i + 1] - arr[i] !== difference){
            return arr[i + 1]
        }
    }

    return null
}


firstNonConsecutive([1,2,3,4,6,7,8]) // 6
firstNonConsecutive([1,2,3,4]) // null
firstNonConsecutive([ -3, -1, 0, 1, 2 ]) // -1 