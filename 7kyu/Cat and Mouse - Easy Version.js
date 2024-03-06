// Cat and Mouse - Easy Version - 7kyu (March 6th)

function catMouse(x){
    let catLocation = x.split('').findIndex(char => char === 'C')
    let mouseLocation = x.split('').findIndex(char => char === 'm')
    

    return (mouseLocation - catLocation) <= 4 ? 'Caught!' : 'Escaped!'
}


catMouse('C....m') // "Escaped!"
catMouse('C..m') // "Caught!"
catMouse('C.....m') // "Escaped!"