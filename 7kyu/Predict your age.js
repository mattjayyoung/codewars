// Predict your age (7kyu) - September 26th

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let arr = [age1, age2, age3, age4, age5, age6, age7, age8]

  return Math.floor(Math.sqrt(arr.map(num => Math.pow(num, 2)).reduce((acc,curr) => acc + curr, 0)) / 2)
}

predictAge(65,60,75,55,60,63,64,45) //  86