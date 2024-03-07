// Sort by Last Char - 7kyu (March 7th)
function last(x){

    let words = x.split(' ')

    function sortByLastChar(a,b){
        
            let lastCharA = a.charAt(a.length - 1).toLowerCase()
            let lastCharB = b.charAt(b.length - 1).toLowerCase()

            if (lastCharA < lastCharB){
                return -1
            } else if (lastCharA > lastCharB){
                return 1
            } else {
                return 0
            }
    }   

    return words.sort(sortByLastChar)  
}

    





last('man i need a taxi up to ubud') // ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
last('what time are we climbing up the volcano') // ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what'] 
last('take me to semynak') // ['take', 'me', 'semynak', 'to']