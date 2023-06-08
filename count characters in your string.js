// count characters in your string (6kyu) - June 8th

function count(string) {
  let arr = string.split('')
  
  return arr.reduce(function(obj,item){
    if (!obj[item]){
      obj[item] = 1
    } else {
      obj[item]++
    }
    return obj
  },{})
  
  
}

count('ABC') // {'A': 1, 'B': 1, 'C': 1});


count('') // {});
count('a') //{'a': 1});
count('ab') // {'a': 1, 'b': 1});
count('aba') // {'a': 2, 'b': 1});
