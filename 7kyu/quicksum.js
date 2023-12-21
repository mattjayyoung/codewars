// Quicksum - 7kyu (December 21st)

function quicksum(packet){
    let total = 0
    for (let i = 0; i < packet.length; i++){
        console.log(packet.charCodeAt(i))
        // console.log((i + 1) * (packet.charCodeAt(i) - 64))

        if (packet.charCodeAt(i) === 32){
            total += 0
        } else if (packet.charCodeAt(i) < 65 || packet.charCodeAt(i) > 90){
            return 0
        } else {
            total += ((i + 1) * (packet.charCodeAt(i) - 64))
        } 
    }

    return total
}

quicksum("ACM") // 46)
quicksum("???") // 0)
quicksum("axg ") // 0)
quicksum("BBC") // 15)
quicksum("234 234 WEF ASDF AAA 554211 ???? ") // 0)


quicksum("MID CENTRAL") // 650)
quicksum("A C M") // 75)