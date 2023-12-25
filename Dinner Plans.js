// Dinner Plans - 7kyu (December 24th)

function commonGround(s1, s2){
  let arr1 = s1.split(' ')
  let arr2 = s2.split(' ')
  let result = []

  if (arr1.length > arr2.length){
    for (let i = 0; i < arr2.length; i++){
      if (arr1.includes(arr2[i])){
        result.push(arr2[i])
      }
    }

  } else {
    for (let i = 0; i < arr1.length; i++){
      if (arr2.includes(arr1[i])){
        result.push(arr1[i])
      }
    }
  }

  if (result.length < 1){
    return 'death'
  } else {
    return result.join(' ')
  }
}

commonGround("eat chicken", "eat chicken and rice") // 'eat chicken')
commonGround("eat a burger and drink a coke", "drink a coke") // 'drink a coke')
commonGround("i like turtles", "what are you talking about") // 'death')