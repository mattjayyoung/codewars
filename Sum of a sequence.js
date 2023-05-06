// Sum of a sequence (7kyu) - May 6th

//PREP

//P - begin is where you begin, end, is where you end, step is the increment
//R - sum of a sequence of integers

const sequenceSum = (begin, end, step) => {
    let sum = 0
    let array = []
    if (begin > end){
        return 0
    } else {
        for (let i = begin; i <= end; i += step){
            array.push(i)
        }
      
        return array.reduce((acc,curr) => acc + curr)
        
    }
  };

//E
  sequenceSum(2, 6, 2) // 12
  sequenceSum(1, 5, 1) // 15
  sequenceSum(1, 5, 3) // 5 
  sequenceSum(291,690,84) // 3315


//P