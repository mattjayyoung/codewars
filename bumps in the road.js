// Bumps in the road (7kyu) - September 15th (7kyu)

function bump(str){
    let obj ={}

    let splitStr = str.split('')

    splitStr.find(char => char !== 'n') && 'Car Dead'

    for (let char of splitStr){
         if (!obj[char]){
            obj[char] = 1
         } else {
            obj[char]++
         }
    }


    return obj['n'] <= 15 || obj['n'] === undefined ? 'Woohoo!' : 'Car Dead'

}

bump("n") // "Woohoo!"
bump("__nn_nnnn__n_n___n____nn__nnn") // "Woohoo!");
bump("nnn_n__n_n___nnnnn___n__nnn__") // "Woohoo!");
bump("_nnnnnnn_n__n______nn__nn_nnn") // "Car Dead");
bump("______n___n_") // "Woohoo!");
bump("__") // 


15 bumps or less => Woohoo! || 'Car Dead'