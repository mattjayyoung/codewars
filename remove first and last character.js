// Remove First and Last Character Part Two (8kyu) - June 4th

function array(string) {
  
 
  let arr = string.split(',')
  
  if (arr.length < 3){
    return null
  } else {
  arr.pop()
  arr.shift()

  return arr.join(' ')
}
  }



array('') // null
array('1') // null);
array('A1,B2') // null
array('1,2,3') // '2')
array('1,2,3,4') // '2 3'
array('A1,B2,C3,D4,E5') // 'B2 C3 D4'
array('A,1,23,456,78,9,Z') // '1 23 456 78 9'