// Find Nearest square number

function nearestSq(n){
    let squares = []

    for (let i = 0; i ** 2 < n; i++){
        squares.push(i ** 2)
    }

    squares.push(squares.length ** 2)

    return Math.abs(n - squares[squares.length - 2]) < Math.abs(n - squares[squares.length - 1]) ? squares[squares.length - 2] : squares[squares.length - 1]
}

nearestSq(1) // 1,
nearestSq(2) // 1,
nearestSq(10) // 9, 
nearestSq(111) // 121, 
nearestSq(9999) // 10000