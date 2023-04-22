// Check the exam - 7kyu (Apr 22)

//PREP

//P - array1 = correct answers, array2 = student's answers; each arr same length and are not empty
//R - score; 

/*
every correct answer => +4 score
every incorrect answer => -1 score
every blank answer => +0
score < 0 => 0
*/


function checkExam(array1, array2) {
 /*
declare score and initialize
 compare elements in array2 with elements in array1
 conditional - if there is a match, add to score
 return score
 */

const result = array1.reduce((score, answer, index, array)=>{
    return score + (array2[index] === "" ? 0 : answer === array2[index] ? 4 : answer 
    !== array2[index] ? -1 : "")
},0)

return result > 0 ? result : 0
 

}



//E

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) // 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) // 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) // 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) // 0