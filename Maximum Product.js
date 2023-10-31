// Maximum Product - 7kyu (October 31st)

function adjacentElementsProduct(array) {
  let highest = array[0] * array[1]
  
  for (let i = 0; i < array.length - 1; i++){
    let product = array[i] * array[i + 1]
    console.log(product)
    
    highest <= product ? highest = product : null
  }

  return highest

}

adjacentElementsProduct([5, 8]) // 40);
adjacentElementsProduct([1, 2, 3]) // 6);
adjacentElementsProduct([1, 5, 10, 9]) // 90);
adjacentElementsProduct([4, 12, 3, 1, 5]) // 48);
adjacentElementsProduct([5, 1, 2, 3, 1, 4]) // 6);


adjacentElementsProduct([ -23, 4, -5, 99, -27, 329, -2, 7, -921 ])