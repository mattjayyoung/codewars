// Last Survivor - 7kyu (March 15th)

function lastSurvivor(letters, coords) {

    if (coords.length < 1){return letters}

    let arr = letters.split('')

    coords.forEach((coord) => {
        arr.splice(coord,1)
    })

    return arr.join()
}

lastSurvivor('abc', [1, 1]) // 'a'
lastSurvivor('kbc', [0, 1]) // 'b'
lastSurvivor('zbk', [2, 1]) // 'z');
lastSurvivor('c', []) // 'c');