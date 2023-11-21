// Fit string case - 7kyu (November 21st)

function solve(s){
    let lowerCaseCount = 0
    let upperCaseCount = 0

    for (let i = 0; i < s.length; i++){
        if (s[i] === s[i].toUpperCase()){
            upperCaseCount++
        } else {
            lowerCaseCount++
        }
    }

    return upperCaseCount > lowerCaseCount ? s.toUpperCase() : s.toLowerCase()

}

solve("code") // "code"
solve("CODe") // "CODE"
solve("COde") // "code"
solve("Code") // "code"