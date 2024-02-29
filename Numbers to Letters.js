// Numbers to Letters - 7kyu (February 28th)

function switcher(x){

    let numReverse = []
    for (let i = 1; i <= 29; i++){
        numReverse.push(Number(i.toString()))
    }
    console.log(numReverse.reverse())

    let lettersArray = []

    for (let i = 97; i <= 122; i++){
        lettersArray.push(String.fromCharCode(i))
    }


    lettersArray.unshift("!")
    lettersArray.unshift("?")
    lettersArray.unshift(" ")

    console.log(lettersArray)

    let result = ""

    for (let i = 0; i < x.length; i++){
        for (let j = 0; j <= numReverse.length; j++){
            if (x[i] == numReverse[j]){
                result += lettersArray[j]
            }
        }
    }

    return result

}

switcher(['24', '12', '23', '22', '4', '26', '9', '8']) // 'codewars'
switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']) // 'btswmdsbd kkw'
switcher(['4', '24']) // 'wc'


97 = 'a'
122 = 'z'