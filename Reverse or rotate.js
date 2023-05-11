// Reverse or rotate - 6kyu (May 11th)

function revrot(str, sz) {
    let allChunks = ""
    
    if (sz <= 0 || !str || sz > str.length){
        return ""
    } else {
    
    for(let i = 1; i <= str.length / sz; i++){
   
    let chunk = str.substring((i * sz) - sz, sz * i)
    
    let chunkArray = chunk.split('')


    let sum = chunkArray.reduce((acc,curr) => acc + (curr ** 3), 0)

    if (sum % 2 === 0){
        chunkArray = chunkArray.reverse().join("")
        allChunks += chunkArray
        
    } else {
            
        let nums = chunk.slice(1)
        let rotated = chunk.substring(0,1)
             
        allChunks += (nums + rotated)
        
        }   

    }

return allChunks
    }
}


revrot("123456987654", 6) // "234561876549"
revrot("123456987653", 6) // "234561356789"
revrot("66443875", 4) // "44668753"
revrot("66443875", 8) // "64438756"
revrot("664438769", 8) // "67834466"
revrot("123456779", 8) // "23456771"
revrot("", 8) // ""
revrot("123456779", 0) // "" 
revrot("563000655734469485", 4) // "0365065073456944"

console.log([1,2,3,4,5,6].reverse().join(''))

//P

/*



*/