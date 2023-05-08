//Maximum Length Difference - 7kyu (May 8th)

function mxdiflg(a1, a2) {
    
    let lengthA1 = a1.map(el => el.length)
    let lengthA2 = a2.map(el => el.length)

    if (a1.length === 0 || a2.length === 0){
      return -1
    } else {
    
    
    let result1 = Math.max(...lengthA2) - Math.min(...lengthA1)
    let result2 = Math.max(...lengthA1) - Math.min(...lengthA2)
    
    return result1 > result2 ? result1 : result2
      }
}


mxdiflg(a1, a2) // 10, not 8

// its asking for the largest difference of length of smallest number from array 1 compare to largest array 2
// then you need to find the largest length of largest number from array 1 compare to smallet array 2
// result must be the biggest one