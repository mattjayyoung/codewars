// methods of arrayObject -- concat() and join() - 8kyu (November 22nd)

function bigToSmall(arr){
  return arr.flat().sort((a,b) => a - b).reverse().join('>')


  
}

bigToSmall([[1,2],[3,4],[5,6]]) // 6>5>4>3>2>1
bigToSmall([[1,3,5],[2,4,6]]) // 6>5>4>3>2>1
bigToSmall([[1,1],[1],[1,1]]) // 1>1>1>1>1
