// Find Cracker. (6kyu) - April 20th

// PREP

// P - each array has a name (1), total score (2), and array of letter grades (3)

//The scores for each grade is:

/*
The scores for each grade is:

A: 30 points
B: 20 points
C: 10 points
D: 5 points
Everything else: 0 points

5 or more grades && all courses > 20 => add 20 points
total score should be capped at 200 points

*/

// R - array of the names of the hacked
// P

function findHack(arr) {
  /*
  1. add the grade point amounts
  2. add the bonus * conditional * if arr.length === 5 && el === 'A', el === 'B', then add 20
  3. * conditional * if the sum is over 200 || the sum doesn't match the total points given => add hacked name to arr to be returned
  */
 let hackedNames = []

 for (let i = 0; i < arr.length; i++){
  
  let sum = 0

  arr[i][2].forEach(grade => {
    switch(grade){
      case 'A':
        sum += 30
      break
      case 'B':
        sum += 20
      break
      case 'C':
        sum += 10
      break
      case 'D':
        sum += 5
      default:
        sum += 0
      break
    }
  })

  console.log(sum)
  
    if (arr[i][2].length >= 5 && arr[i][2].every(grade => grade === 'A' || grade === 'B')){
      sum += 20
    }

    console.log(sum)
    
    if(sum !== arr[i][1]){
      hackedNames.push(arr[i][0])
    }
  }
  return hackedNames
}
 
// E

const array = [
["name1", 150, ["B", "A", "A", "C", "A", "A"]],
["name2", 120, ["B", "A", "A", "A"]],
["name3", 160, ["B", "A", "A", "A","A"]],
["name4", 140, ["B", "A", "A", "C", "A"]]
] // ["name2","name4"]

findHack(array) // ["name2","name4"]

const arrayTwo = [
  ["name1", 445, ["B", "A", "A", "C", "A", "A"]], // name1 total point is over 200 => hacked
  ["name2", 110, ["B", "A", "A", "A"]], //  name2 point is right
  ["name3", 200, ["B", "A", "A", "C"]], // name3 point is 200 but real point is 90 => hacked

  ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]] // name4 point is right
  ];


findHack(arrayTwo) // ["name1", "name3"]


// Refactored code
function findHack(arr, bonusCriteria) {
  /*
  1. add the grade point amounts
  2. add the bonus * conditional * based on the bonus criteria
  3. * conditional * if the sum is over 200 || the sum doesn't match the total points given => add hacked name to arr to be returned
  */
  const gradePoints = {
    'A': 30,
    'B': 20,
    'C': 10,
    'D': 5,
    'F': 0,
  }
  let hackedNames = []

  for (let i = 0; i < arr.length; i++){
    let sum = arr[i][2].reduce((acc, grade) => acc + gradePoints[grade], 0)
    
    if (bonusCriteria(arr[i][2])){
      sum += 20
    }
    
    if(sum !== arr[i][1] || sum > 200){
      hackedNames.push(arr[i][0])
    }
  }
  return hackedNames
}




