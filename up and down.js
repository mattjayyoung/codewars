// up AND down - 6kyu (June 3rd)

function arrange(str) {
    let splitStr = str.split(' ')

    for (let i = 0; i < splitStr.length - 1; i++){
        if (i % 2 === 0 && splitStr[i].length > splitStr[i + 1].length){
            let placeholder = splitStr[i]
            splitStr[i] = splitStr[i + 1]
            splitStr[i + 1] = placeholder
            
            
        } else if (i % 2 !== 0 && splitStr[i].length < splitStr[i + 1].length){
            let placeholder = splitStr[i]
            splitStr[i] = splitStr[i + 1]
            splitStr[i + 1] = placeholder
            
        
        } 
        
    }
    
    return splitStr.map((el,i,arr) => i % 2 === 0 ? el.toLowerCase() : el.toUpperCase()).join(' ')
    
}

    
    // if (splitStr[0].length >= splitStr[1].length){
    //     let placeholder = splitStr[0]
    //     splitStr[0] = splitStr[1]
    //     splitStr[1] = placeholder
        
    // }

    // if (splitStr[1].length <= splitStr[2].length){
    //     let placeholder = splitStr[1]
    //     splitStr[1] = splitStr[2]
    //     splitStr[2] = placeholder
    // }

    // if (splitStr[2].length >= splitStr[3].length){
    //     let placeholder = splitStr[2]
    //     splitStr[2] = splitStr[3]
    //     splitStr[3] = placeholder
    // }
    



/* length s(0) <= length s(1) >= length s(2) <= length s(3) >= length (s4) <= length (s5)  */


arrange("who hit retaining The That a we taken") // "who RETAINING hit THAT a THE we TAKEN"); // 3
arrange("on I came up were so grandmothers") // "i CAME on WERE up GRANDMOTHERS so"); // 4
arrange("way the my wall them him") // "way THE my WALL him THEM"); // 1
arrange("turn know great-aunts aunt look A to back") // "turn GREAT-AUNTS know AUNT a LOOK to BACK"); 2


arrange("after be arrived two My so") // "be arrived two after My so"

/* String Methods Used

.length


*/