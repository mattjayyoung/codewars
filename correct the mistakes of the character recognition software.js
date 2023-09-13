// Correct the mistakes of the character recognition software - 8kyu (Sept 13th)

function correct(string){
	return string.split('').map(char => {
    switch(char){
        case '5':
          return 'S'
        break;
        case '0':
          return 'O'
        break;
        case '1':
          return 'I'
        break
        default: 
          return char
        }
    }
  ).join('')
  
            
}

correct("L0ND0N")