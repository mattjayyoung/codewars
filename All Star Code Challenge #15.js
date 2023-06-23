// All Star Code Challenge #15 - 6kyu (June 23rd)

function rotate(str){
    let arr = []
    arr.unshift(str)

    if (str.length !== 0){  
    
    for (let i = 0; i < str.length - 1; i++){
        let slice = str.slice(0, str.length - 1)
        let lastChar = str[str.length - 1]
        str = lastChar.concat(slice)
        arr.unshift(str)
    }

    return arr

    } else {
        return ['']

    }
    
}

rotate('') // [''] ['']
rotate(' ') // [" "]
rotate("Hello") // ["elloH","lloHe", "loHel", "oHell", "Hello"]