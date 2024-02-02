// Char Code Calculation - 7kyu (February 2nd)

function calc(str){

    
    let total1Str = ""

    for (let i = 0; i < str.length; i++){
        total1Str += str.charCodeAt(i)
    }

    let total2Str = total1Str.replaceAll('7', '1')

    let number1 = total1Str.split('').map(num => Number(num)).reduce((acc,curr) => acc + curr)
    let number2 = total2Str.split('').map(num => Number(num)).reduce((acc,curr) => acc + curr)
    

return number1 - number2


}

calc('ABC')
calc('abcdef') // 6
calc('ifkhchlhfd') // 6
calc('aaaaaddddr') // 30
calc('jfmgklf8hglbe') // 6 
calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') // 96