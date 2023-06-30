// Insert dashes - 7kyu (June 30th)

function insertDash(num) {
    let splitNum = num.toString().split('')
    let newArr = []

    for (let i = 0; i < splitNum.length; i++){
        if (splitNum[i] % 2 === 0){
            newArr.push(splitNum[i])
        } else {
            newArr.push(splitNum[i])
            if (splitNum[i + 1] % 2 !== 0){
            newArr.push("-")
            

            }
            
        }
    }

    if (newArr[newArr.length - 1] === "-" ){
        newArr.pop()
    }
    

    return newArr.join('')
 }
 
 //'4547-9-3-'

 insertDash(454793) //'4547-9-3'
 insertDash(123456) //'123456'
 insertDash(1003567) //'1003-567'