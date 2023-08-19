// Deodorant Evaporator - 7kyu (August 19th)

function evaporator(content, evap_per_day, threshold){ 
  
    let days = 0
    // let millilitersLostPerDay = content -= (content * (evap_per_day / 100))

    let doesntWorkAnymore = content * (threshold / 100)

    while (content >= doesntWorkAnymore){
        content -= (content * (evap_per_day / 100))
        days++
    }

    return days


}


evaporator(10, 10, 5) // 29

// Cannot go below 0.5




evaporator(10,10,10) // 22