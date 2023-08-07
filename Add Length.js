// Add Length - 8kyu (August 6th)

function addLength(str) {
let arr = str.split(' ').map(word => word + " " + word.length)

return arr
}

addLength("apple ban")