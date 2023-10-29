// Training on Row Weights - 8kyu (October 29th)


function rowWeights(array){
  let newArr = [0,0]

  array.forEach((num,i) => i % 2 === 0 ? newArr[0] += num : newArr[1] += num)

  return newArr
}

rowWeights([80]) // [80,0]);
rowWeights([100,50]) // [100,50]);
rowWeights([50,60,70,80]) // [120,140]);
rowWeights([13,27,49]) // [62,27]);
rowWeights([70,58,75,34,91]) // [236,92]);
rowWeights([29,83,67,53,19,28,96]) // [211,164]);
rowWeights([0]) // [0,0]);
rowWeights([100,51,50,100]) // [150,151]);
rowWeights([39,84,74,18,59,72,35,61]) // [207,235]);
rowWeights([0,1,0]) // [0,1]);