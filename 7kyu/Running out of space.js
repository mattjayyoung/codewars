// Running out of space - 7kyu (May 21st)

function spacey(array){

let newArr = new Array(array.length)

newArr.fill(array[0])

for (let i = 1; i < newArr.length; i++){
    newArr[i] += array[1]
}

for (let i = 2; i < newArr.length; i++){
    newArr[i] += array[2]
}

for (let i = 3; i < newArr.length; i++){
    newArr[i] += array[3]
}

for (let i = 4; i < newArr.length; i++){
    newArr[i] += array[4]
}

return newArr

}


spacey(['kevin', 'has','no','space']) // [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']
spacey(['this','cheese','has','no','holes']) // ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']

// add 'kevin' to indices 0-3
// add 'has' to indices 1-3
// add 'no' to indices 2-3
// add 'spaces' to index 3