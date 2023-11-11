// ReOrdering (7kyu) - November 11th

function reOrdering(text){
  let arr = text.split(' ')
  let result = []
  
  for (let i = 0; i < arr.length; i++){
    if (arr[i][0] === arr[i][0].toUpperCase()){
      result.unshift(arr[i])
    } else {
      result.push(arr[i])
    }
  }
  return result.join(' ')
  
}

reOrdering('ming Yao') // 'Yao ming'
reOrdering('Mano donowana') // 'Mano donowana'
reOrdering('wario LoBan hello') // 'LoBan wario hello'
reOrdering('bull color pig Patrick') // 'Patrick bull color pig'
reOrdering('jojo ddjajdiojdwo ana G nnibiial') // 'G jojo ddjajdiojdwo ana nnibiial'
reOrdering('is one of those rare names that s both exotic and simple Adira') //'Adira is one of those rare names that s both exotic and simple'
reOrdering('is an older name than annabel Amabel and a lot more distinctive') //'Amabel is an older name than annabel and a lot more distinctive'
reOrdering('JoJo') // 'JoJo'