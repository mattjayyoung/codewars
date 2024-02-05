// Moves in squared strings (7kyu) - February 5th

function vertMirror(strng) {
    return strng.split('\n').map(word => word.split('').reverse().join('')).join('\n')
}

function horMirror(strng) {
    return strng.split('\n').reverse().join('\n')
}

function oper(fct, s) {
    return fct(s)
 }


horMirror("abcd\nefgh\nijkl\nmnop") // "mnop\nijkl\nefgh\nabcd"



