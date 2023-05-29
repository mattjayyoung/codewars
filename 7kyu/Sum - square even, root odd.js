// Sum - Square Even, Root Odd - 7kyu (May 29th)

function sumSquareEvenRootOdd (ns){
    return Number(ns.map(el => {
        if (el % 2 === 0){
            return el ** 2
        } else {
            return Math.sqrt(el)
        }
    })
    .reduce((acc,curr) => {
        return acc + curr
    }, 0)
    .toFixed(2))
   
  };

sumSquareEvenRootOdd([4,5,7,8,1,2,3,0]) // 91.61
sumSquareEvenRootOdd([1,14,9,8,17,21]) //272.71,