// Find the odd int - 6kyu (Apr 29th)

//PREP

//P - arr of integers
//R - return the ONE integer that appears an odd number of times


function findOdd(arr) {
  const counts = {}

  for (let num of arr){
    counts[num] = counts[num] ? counts[num] + 1 : 1
    }
    
    console.log(counts)
  for (let property in counts){
    console.log(`${property}: ${counts[property]}`)
    if (counts[property] % 2 !== 0){
      return Number(property)
    }
  }



  }


//E

findOdd([0,1,0,1,0]) // 0
findOdd([1,1,2]) // 2
findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]) // 4
findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) // 5
findOdd([1,1,2,-2,5,2,4,4,-1,-2,5], -1) // -1
findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]) // 5
findOdd([1,1,1,1,1,1,10,1,1,1,1]) // 10
findOdd([5,4,3,2,1,5,4,3,2,10,10]) // 1

//P

/* 
Create a Set of unique values
Iterate through these set of unique values with loop

create empty array
conditional => iterate through array, if element in array can be found in new array
=> + 1, if not, el: 0 


-If countEl % 2 !== 0 => return El 


*/