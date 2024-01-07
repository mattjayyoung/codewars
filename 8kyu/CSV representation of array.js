// CSV representation of array - 8kyu (January 7th)

function toCsvText(array) {
   return array.map(arr => arr.join() + "\n").join('').slice(0, -1)

   
}


             

toCsvText([
    [0,1,2,3,45],
    [10,11,12,13,14],
    [20,21,22,23,24],
    [30,31,32,33,34]
])
// '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34')