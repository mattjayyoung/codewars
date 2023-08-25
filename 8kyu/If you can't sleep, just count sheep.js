// If you can't sleep, just count sheep - 8kyu (Aug 24th)

function countSheep (num){
  
  let sentence = ""
  
  if (num > 0){
      for (let i = 1; i <= num; i++){
    sentence += (i + " sheep...")
  }}
  
  return sentence

}