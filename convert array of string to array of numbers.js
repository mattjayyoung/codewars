// Convert an array of strings to array of numbers - 7kyu (November 5th)

function toNumberArray(stringarray){
    return stringarray.map(num => Number(num))
}

toNumberArray(["1.1","2.2","3.3"]) // [1.1,2.2,3.3]