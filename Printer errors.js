// Printer errors - 7kyu (May 10th)


function printerError(str) {
    let denominator = str.length
    let error = 0

    for (let i = 0; i < str.length; i++){
        if (str.charCodeAt(i) > 109){
            error += 1
        }
    }

    return `${error}/${denominator}` 

}

let str = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
printerError(str) // "3/56"

let s="aaaxbbbbyyhwawiwjjjwwm"
printerError(s) // "8/22"

let s="aaabbbbhaijjjm"
printerError(s) // "0/14"


a = 97
m = 109
z= 122