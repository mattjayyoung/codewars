// Summing a number's digits - 7kyu (May 12th)

function sumDigits(number) {
    let numString = number.toString().split('').filter(char => char !== "-").map(num => Math.abs(num))
    let total = 0

    for (let i = 0; i < numString.length; i++){
        total += parseInt(numString[i])
    }
    return total
}

sumDigits(10) // 1
sumDigits(99) // 18
sumDigits(-32) // 5
sumDigits(12481321) // 22
sumDigits(-1853) // 17