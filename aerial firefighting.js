// Aerial Firefighting = 7kyu (July 12th)

function waterbombs(fire, width){

    let bombs = 0
    let byeBuildings = fire.split('Y').filter(el => el)
  
    if (fire === 'Y'){
        return 0
    } else if (width === 1){
        for (let i = 0; i < fire.length; i++){
            if (fire[i] === 'x'){
                bombs++
            }
        }   
        return bombs
    } else if (byeBuildings.every(el => width >= el.length)){
        bombs = byeBuildings.length
        return bombs
    } else {
        for (let i = 0; i < byeBuildings.length; i++){
            if (width >= byeBuildings[i]){
                bombs++
            } else {
                let bigAssFire = Array.from(byeBuildings[i])
                for (let i = 0; i < bigAssFire.length; i += width){
                    bombs++
                }
            }
        }
        return bombs
    }
}

waterbombs("YxxxxxYxxYYxYxxYxxxYYxYxxxxxY", 4) // 9
waterbombs("YxxxxxYxxxxxxxxYxxxxxYxYxx", 4) // 8


waterbombs("xxYxx", 3)      -->  2 
waterbombs("xxYxx", 1)      -->  4
waterbombs("xxxxYxYx", 5)   -->  3
waterbombs("xxxxxYxYx", 2)  -->  5


waterbombs("xxxxYxYx", 4) // 3
waterbombs("xxYxx", 3) // 2
waterbombs("Y", 4)// 0
waterbombs("xx", 1)// 2
waterbombs("xxYxx", 3)// 2
waterbombs("xxxYx", 1)// 4
waterbombs("xxxxYxYx", 4) // 3
waterbombs("xxxxxYxYx", 2) // 5

