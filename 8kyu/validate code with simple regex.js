// Validate code with simple regex - 8kyu (November 9th)

function validateCode (code) {
    return code.toString().match(/^[123]/g) !== null
}

validateCode(123) // true
validateCode('123')
validateCode(248) // true
validateCode(8) // false
validateCode(321) // true
validateCode(9453) // false  