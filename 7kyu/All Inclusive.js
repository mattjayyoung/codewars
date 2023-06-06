// All Inclusive (7kyu) - June 5th complete

function containAllRots(str, arr) {
    let splitStr = str.split('')
    let compareArr = []
    
    for (let i = 0; i < splitStr.length; i++){
    let lastLetter = splitStr.pop()
    splitStr.unshift(lastLetter)
    compareArr.push(splitStr.join(''))

    }

    for (let i = 0; i < compareArr.length; i++){
        if (!arr.includes(compareArr[i])){
            return false
        }
    }
    return true

}
    


containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) // true

containAllRots("Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) // false


/*

loop through each element to check if each letter is in every single position 
*/