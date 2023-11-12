// Divide and Conquer - 7kyu (November 12th)

function divCon(arr){
  
  let sumNumbers = 0
  let sumStrings = 0

  for (let i = 0; i < arr.length; i++){
    if (typeof arr[i] === 'number'){
      sumNumbers += arr[i]
    } else {
      sumStrings += Number(arr[i])
    }
  }

  return sumNumbers - sumStrings

}

divCon([9, 3, '7', '3']) // 2);
divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]) // 14); 
divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']) // 13); 