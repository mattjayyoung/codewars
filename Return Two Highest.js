// Return Two Highest - 8kyu (December 6th)

function twoHighest(arr) {
    arr = Array.from(new Set(arr.sort((a,b) => a - b)))

    if (arr.length < 1){
        return []
    } else if (arr.length === 1){
        return [arr[0]]
    } else {
        console.log(arr)
        return [arr[arr.length - 1], arr[arr.length - 2]]
    }
}

twoHighest([]) // []
twoHighest([15]) // [15]
twoHighest([15, 20, 20, 17]) // [20, 17]