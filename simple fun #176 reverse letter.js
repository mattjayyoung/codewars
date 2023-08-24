// Simple Fun #176: Reverse Letter - 7kyu (Aug 23rd)

function reverseLetter(str) {
  return str.match(/[a-z]/ig).reverse().join('')
}