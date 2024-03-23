// Training JS #16: Methods of String object--slice(), substring() and substr() - 8kyu (March 22nd) 

function cutIt(arr){
  let lengthArr = arr.map(el => el.length)

  let shortestWordPosition = lengthArr.indexOf(Math.min(...lengthArr))

  return arr.map(el => el.slice(0, arr[shortestWordPosition].length))
  
}

cutIt(["ab","cde","fgh"]) // ["ab","cd","fg"]
cutIt(["abc","defgh","ijklmn"]) // ["abc","def","ijk"]
cutIt(["codewars","javascript","java"]) // ["code","java","java"]