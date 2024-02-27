// Crash Override - 8kyu (February 27th)

function aliasGen(first, last){

    if (first.match(/^[A-Za-z]/g) && last.match(/^[A-Za-z]/g)){
      
          return `${firstName[first[0].toUpperCase()]} ${surname[last[0].toUpperCase()]}`
        } else {
          return 'Your name must start with a letter from A - Z.'
        }
    }