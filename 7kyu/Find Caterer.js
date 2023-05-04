Find Caterer - 7kyu (May 4th)

function findCaterer(budget, people){
      let basicBuffet = 15 * people
      let economyBuffet = 20 * people
      let premiumBuffet = 30 * people
      let discount = premiumBuffet * 0.2
      let totalPremium = premiumBuffet - discount

  if (people === 0 || budget < basicBuffet){
    return -1
  } else if(budget >= totalPremium && people > 60 || budget >= premiumBuffet) {
     return 3
    } else if (budget >= economyBuffet){
      return 2
    } else if (budget >= basicBuffet){
      return 1
    }
}


findCaterer(7194, 332) // 1

314 


// 1st - "basic buffet", $15 per person // returns 1
// 2nd - "econcomy buffet" $20 per person // returns 2
// 3rd - "premium buffet" $30 per person; 20% discount if there are more than 60 people //returns 3

// returns -1 if there are no people or if the budget is lower than the cost of the buffets from the first caterer

//spend maximum that fits into the budget

findCaterer(200, 9) // 2

15 * 9 = 135
20 * 9 = 180
30 * 9 = 270

//if more than 60 people
let cost = 30 * 9
let discount = (270 * 0.2)
270 - 54

findCaterer(300, 9) // 3 