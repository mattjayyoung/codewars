// Indexed capitalization (7kyu) - January 18th 

function capitalize(s,arr){
  
  s = s.split('')
  for (let i = 0; i < arr.length; i++){
    
    if (arr[i] <= s.length){
      s[arr[i]] = s[arr[i]].toUpperCase()
    }
    
  }
  
 return s.join('')
 
};

capitalize("abcdef",[1,2,5]) //'aBCdeF'
capitalize("abcdef",[1,2,5,100]) //'aBCdeF');
capitalize("codewars",[1,3,5,50]) //'cOdEwArs');
capitalize("abracadabra",[2,6,9,10]) //'abRacaDabRA');
capitalize("codewarriors",[5]) //'codewArriors');
capitalize("indexinglessons",[0]) //'Indexinglessons')