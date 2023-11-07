

function solve(arr){  
    let totalCount = []

    arr = arr.map(word => word.toLowerCase())

    arr.forEach(word => totalCount.push(stringSolve(word)))
    
    return totalCount

};

function stringSolve(str){
    
    let wordCount = 0

    for (let i = 0; i < str.length; i++){
        if ((str.charCodeAt(i) - 96) === (i + 1)){
            wordCount++
        }
            
    }
    return wordCount
}

solve(["abode","ABc","xyzD"]) // [4,3,1]);
solve(["abide","ABc","xyz"]) // [4,3,0]);
solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]) // [6, 5, 7]
solve(["encode","abc","xyzD","ABmD"]) // [1, 3, 1, 3]);


//charCodeAt => takes an index of letter, spits out the character code
// charAt => takes an index, spits out the letter
a = 97
z = 122