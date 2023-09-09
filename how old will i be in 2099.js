// How old will I be in 2099 - 8kyu (Sept 9th)

function  calculateAge(a,b) {
  
    return a === b ? `You were born this very year!` : b - a === 1 ? `You are 1 year old.` : a - b === 1 ? `You will be born in 1 year.` : b > a ? `You are ${b - a} years old.` : `You will be born in ${Math.abs(b - a)} years.`
    
    }
    
    