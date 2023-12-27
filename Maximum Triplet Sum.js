// Maximum Triplet Sum (7kyu) - December 27th 

function maxTriSum(numbers){
    const sorted = Array.from(new Set(numbers.sort((a,b) => b - a)))
    return sorted[0] + sorted[1] + sorted[2]
  }

maxTriSum([3,2,6,8,2,3]) // 17

maxTriSum([2,9,13,10,5,2,9,5]) // 32);

maxTriSum([2,1,8,0,6,4,8,6,2,4]) // 18);

maxTriSum([-3,-27,-4,-2,-27,-2]) // -9);

maxTriSum([-14,-12,-7,-42,-809,-14,-12]) // -33);

maxTriSum([-13,-50,57,13,67,-13,57,108,67]) // 232);

maxTriSum([-7,12,-7,29,-5,0,-7,0,0,29]) // 41);

maxTriSum([-2,0,2]) // 0);

maxTriSum([-2,-4,0,-9,2]) // 0);
maxTriSum([-5,-1,-9,0,2]) // 1);