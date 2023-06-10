//Sorting Arrays - 7kyu (June 10th)

function sortArray(a1, a2) {
    let firstInitialArray = a1.map(el => el[0])
    let sortedArray = []
    

    for (let i = 0; i < firstInitialArray.length; i++){
        for (let j = 0; j < a2.length; j++){
            if (firstInitialArray[i] === a2[j][0]){
                sortedArray.push(a2[j])
            }
        }
    }
    return sortedArray

}

let a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'];
let a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'];
sortArray(a1, a2)// ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake'];
