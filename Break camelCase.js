// Break camelCase - 6kyu (October 9th)

// complete the function
function solution(string) {
    let arr = string.split('')
    for (let i = 0; i < arr.length; i++){
       if (arr[i] === arr[i].toUpperCase()){
        arr.splice(i, 1, ` ${arr[i]}`)
       } 
    }
    return arr.join('')
}


solution("camelCasing")  //  "camel Casing"
solution("identifier")   //  "identifier"
solution("")             //  ""