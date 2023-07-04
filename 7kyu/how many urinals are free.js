//how many urinals are free - 7kyu (July 4th)

function getFreeUrinals(urinals){
  
    let freeUrinals = 0
    let urinalsArray = urinals.split('')
  
    for (let i = 0; i < urinalsArray.length; i++){
        if (urinalsArray[i] === '1' && urinalsArray[i + 1] === "1"){
            return -1
        } else if (urinalsArray[i] === "0" && urinalsArray[i - 1] !== "1" && urinalsArray[i + 1] !== "1"){
            urinalsArray.splice(i, 1, '1')
            freeUrinals++
        } 
    }
   
  return freeUrinals
    
}

getFreeUrinals("110") // -1
getFreeUrinals("101101001") // -1

getFreeUrinals("10001") // 1, index 0 & 4 occupied
getFreeUrinals("01000") // 1, index 1 occupied
getFreeUrinals("10000") // 2, index 0 occupied

getFreeUrinals("1001") // 0, index 0 & 3 occupied
getFreeUrinals("00010") // 1, index 3 occupied


getFreeUrinals("00000") // 3, none occupied
 getFreeUrinals("0000") // 2, none occupied
 
 
  getFreeUrinals("1") // 0, index 0 occupied
  getFreeUrinals("0") // 1, none occupied
  igetFreeUrinals("10") // 0, index 0 occupied

  /*

  If urinals[i] === 1, urinals[i]
 
  */