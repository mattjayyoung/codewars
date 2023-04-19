//Count the smiley faces! - 6kyu (Apr 19th)

/*

Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)

*/

//PREP

//P - arr, each smiling face must contain eyes ( : or ; ) + nose is optional ( - or ~ ) + smiling face must contain mouth ( ) or D )
//R - return the total number of smiling faces in the array, empty arrays return 0

function countSmileys(arr) {
    let faces = 0
    for (let face of arr){
        console.log(face.length)
        if ((face.length === 3) && (face[0] === ":" || face[0] === ";") && (face[1] === "~" || face[1] === "-") && (face[2] === "D" || face[2] === ")") ){
        faces += 1
        console.log(face + 'cuz im happy')
    } else if ((face.length === 2) && (face[0] === ":" || face[0] === ";") && (face[1] === "D" || face[1] === ")")){
        faces += 1
        console.log(face)
     } else if (face.length === 0){
        return faces
     }
}

return faces
    
}

function countSmileys(arr){
    let smiles = 0
    let acceptableSmileys = [':)', ';)', ':D', ';D', ':-)', ';-)', ':~)', ';~)', ':~D', ';~D', ':-D', ';-D'];

    for (let smile of arr){
        if (acceptableSmileys.includes(smile)){
            smiles++
        }
    }
    return smiles
}


//E

countSmileys(['mD',':~)',';~D',':)']) // 3
countSmileys([':D',':~)',';~D',':)']) // 4
countSmileys([':)',':(',':D',':O',':;']) // 2
countSmileys([';]', ':[', ';*', ':$', ';-D']) // 1

// Refactored code

function countSmileys(arr) {
    let faces = 0;
    const validFaces = [':)', ';)', ':D', ';D', ':-)', ';-)', ':~)', ';~)', ':~D', ';~D', ':-D', ';-D'];

    for (let face of arr) {
        if (validFaces.includes(face)) {
            faces++;
        }
    }

    return faces;
}




function countSmileys(arr){
    let faces = 0
    let validSmiles = [':)', ';)', ':D', ';D', ':-)', ';-)', ':~)', ';~)', ':~D', ';~D', ':-D', ';-D'];

    for (let face of arr){
        if (validFaces.includes(face)){
            faces++
        }
    }

    return faces

}