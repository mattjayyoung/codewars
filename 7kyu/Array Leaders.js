// Array Leaders (7kyu) - February 21st

function arrayLeaders(numbers){
  let arr = [];
  let nums = numbers.slice();

  for (let i = 0; i < nums.length; i++) {
    let firstNum = nums[i];
    let sum = nums.slice(i + 1).reduce((acc, curr) => acc + curr, 0);

    if (firstNum > sum) {
      arr.push(firstNum);
    }
  }

  return arr;
}

console.log(arrayLeaders([1,2,3,4,0])); // Output: [4]

arrayLeaders([16,17,4,3,5,2]) // [17,5,2]