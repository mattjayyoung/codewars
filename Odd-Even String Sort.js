// Odd-Even String Sort - 7kyu (February 11th)

function sortMyString(str) {
    let result = ''

    for (let i = 0; i < str.length; i++){
        if (i % 2 === 0){
            result += str[i]
        }
    }

    result += " "

    for (let i = 0; i < str.length; i++){
        if (i % 2 !== 0){
            result += str[i]
        }
    }

    return result
}

sortMyString("CodeWars") //  "CdWr oeas"
sortMyString("YCOLUE'VREER") // "YOU'RE CLEVER" 