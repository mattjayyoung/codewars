// Mumbling - 7kyu (May 3rd)

function accum(s) {
	return s.split('').map((char, index, array) => {
  
    return char.toUpperCase() + char.toLowerCase().repeat(index)


    }).join('-')

    
  
}

accum("ZpglnRxqenU") // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"

accum("Zpg") // "Z-Pp-Ggg"