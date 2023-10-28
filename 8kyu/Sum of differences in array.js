// Sum of differences in array - 8kyu (October 28th)

function sumOfDifferences(arr) {
    arr = arr.sort((a,b) => b - a)
    let result = 0

    for (let i = 0; i < arr.length - 1; i++){
        result += arr[i] - arr[i + 1]
    }

return result


}


sumOfDifferences([1, 2, 10]) //  9


sumOfDifferences([-3, -2, -1]) //  2