//Persistent Bugger - 6kyu (May 9th)

//PREP

//P - positive number
//R - number of times you must multiply the digits in num

function persistence(num) {
    let count = 0
    while (num.toString().length > 1){
    
    let numArray = num.toString().split('').map(num => Number(num))

    num = numArray.reduce((acc,curr) => acc * curr, 1)

    count++
}
return count

 }


 //E

 persistence(39) // 3
 persistence(4) // 0
 persistence(25) // 2
 persistence(999) //4;

 //P

 /*
 
 -establish a count (which you'll be returning)
 -split the number into separate elements
 -use reduce to multiply the elements in array
 -wrap all of this in a larger loop
 -if the resulting number is one digit, return that number; otherwise put through reduce method

 
 */