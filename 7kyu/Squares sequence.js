// Squares sequence - 7kyu (March 19th)

function squares(x, n) {
    let arr = []

    if (n <= 0) return arr

    let result = x
    arr.push(result)
    for (let i = 1; i < n; i++){
        arr.push(result **= 2)

    }

    return arr
}

squares(2,5) // [2,4,16,256,65536] 
squares(3,3) // [3,9,81]
squares(5,3) // [5,25,625]  
squares(10,4) // [10,100,10000,100000000]