// Count Repeats - 6kyu (December 23rd)

function countRepeats(str) {
    arr = str.toUpperCase().split('')
    let count = 0

    for (let i = 0; i < arr.length; i++){
        if (arr[i] === arr[i + 1]){
            arr.splice(i + 1, 1)
            count += 1
            i = 0
        }
    }
    return count
  
}

countRepeats('AABCCD') // 2);
countRepeats('AABCCDA') // 2)
countRepeats('AaBBCCC') // 3);
countRepeats('teesssstt')
countRepeats('@*$##^^^*)*') // 3