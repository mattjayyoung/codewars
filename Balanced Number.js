function balancedNum(number){
    let stringNumber = number.toString()
    let stringNumberLength = number.toString().length

    if (stringNumberLength <= 2){
        return 'Balanced'
    }

    if (stringNumberLength % 2 === 0){
        let left = ""
        let right = ""

        for (let i = 0; i <= (stringNumberLength / 2) - 2; i++){
            left += stringNumber[i]
        }


        for (let i = (stringNumberLength / 2) + 1; i < stringNumberLength; i++){
            right += stringNumber[i]
        }

        let leftSum = left.split('').map(num => Number(num)).reduce((acc, curr) => acc + curr)
        let rightSum = right.split('').map(num => Number(num)).reduce((acc, curr) => acc + curr)

        return leftSum === rightSum ? 'Balanced' : 'Not Balanced'
    } else {

        let left = ""
        let right = ""

        for (let i = 0; i <= Math.floor(stringNumberLength / 2) - 1; i++){
            left += stringNumber[i]
        }

        for (let i = Math.ceil(stringNumberLength / 2); i < stringNumberLength ; i++){
            right += stringNumber[i]
        }

        let leftSum = left.split('').map(num => Number(num)).reduce((acc, curr) => acc + curr)
        let rightSum = right.split('').map(num => Number(num)).reduce((acc, curr) => acc + curr)

        return leftSum === rightSum ? 'Balanced' : 'Not Balanced'
    }
}


balancedNum(959) // "Balanced")

balancedNum(13) // "Balanced")
balancedNum(432) // "Not Balanced")
balancedNum(424) // "Balanced")
balancedNum(1024) // "Not Balanced")
balancedNum(66545) // "Not Balanced")
balancedNum(295591) // "Not Balanced")


balancedNum(1230987) // "Not Balanced")
balancedNum(56239814) // "Balanced")

balancedNum(7) // "Balanced")
