// Alphabet War - 7kyu (August 21st)

function alphabetWar(fight){
   const leftSide = ['s','b','p','w']
   const rightSide = ['z','d','q','m']
   
   let leftScore = 0
   let rightScore = 0

   let arr = fight.split('')

   

 arr.forEach((char,i) => {
   if (leftSide.includes(char)){
      leftScore += (leftSide.indexOf(char) + 1)
      
   } else if (rightSide.includes(char)){
      rightScore += (rightSide.indexOf(char) + 1)
      
   }
 })
 

   if (leftScore > rightScore) return 'Left side wins!'
   if (rightScore > leftScore) return 'Right side wins!'

   return `Let's fight again!`

}

      
alphabetWar("z") // "Right side wins!" );
alphabetWar("zdqmwpbs") // "Let's fight again!" 
alphabetWar("zzzzs")// "Right side wins!" );
alphabetWar("wwwwww") // "Left side wins!" );