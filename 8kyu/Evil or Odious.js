// Evil or Odious - 8kyu (February 23rd)

function evil(n) {
  
    const toBinary = n.toString(2)
    let count = 0
 
    for (let i = 0; i < toBinary.length; i++){
      if (toBinary[i] === "1"){
        count++
        }
    }
  
    return count % 2 === 0 || 0 ? `It's Evil!` : `It's Odious!`
}