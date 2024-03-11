// Basic Sequence Practice - 7kyu (March 10th)

function sumOfN(n) {

    let results = []
    
    let count = 0
    let argument = n
    n = Math.abs(n)

    console.log(n)
    
    for (let i = 0; i <= n; i++){
      count += i
      results.push(count)
    }
    
    
    return argument < 0 ? results.map(num => {
        if (num === 0){
            return 0
    } else {
        return num * -1

    }}
    ) : results
    
  };

sumOfN(3) // [0, 1, 3, 6]
sumOfN(-4) // [0, -1, -3, -6, -10] 
sumOfN(1) // [0, 1]   
sumOfN(-6) // [0, -1, -3, -6, -10, -15, -21]