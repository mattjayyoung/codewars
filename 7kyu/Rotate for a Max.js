// Rotate for a Max (7kyu) - February 9th

function maxRot(num) {
  let listOfNums = [];

  let numArray = num.toString().split('');

  for (let i = 0; i < numArray.length - 1; i++) {
   
    let rotatedNum = numArray.slice(0, i).concat(numArray.slice(i + 1), numArray[i]);
    numArray = rotatedNum;
    listOfNums.push(Number(rotatedNum.join('')));
  }

  return Math.max(num, ...listOfNums);
}

// Example usage:
console.log(maxRot(56789)); // Should return 68957
console.log(maxRot(38458215)); // Should return 


// Example usage:
maxRot(56789); // Should return 68957
maxRot(38458215); // Should return 85821534


maxRot(700626003) // 66072300



maxRot(887788973) // 878973878


maxRot(56789) // 68957 
maxRot(38458215) // 85821534);
maxRot(195881031) // 988103115);
maxRot(896219342) // 962193428);
maxRot(69418307) // 94183076);