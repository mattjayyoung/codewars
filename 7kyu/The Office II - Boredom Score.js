// The Office II - Boredom Score - 7kyu (January 23rd)

function boredom(staff){
  let obj = staff

  let result = 0

  let totalDepartments = []

  for (department in obj){
    totalDepartments.push(obj[department])
  }

  console.log(totalDepartments)

  const boredomAssessment = {
    accounts: 1,
    finance: 2,
    canteen: 10,
regulation: 3,
trading: 6,
change: 6,
IS: 8,
retail: 5,
cleaning: 4,
"pissing about": 25
  }

  for (let i = 0; i < totalDepartments.length; i++){
    for (let department in boredomAssessment){
      if (totalDepartments[i] === department){
        result += Number(boredomAssessment[department])
      }
    }
  }

  if (result <= 80){
    return 'kill me now'
  } else if(result >= 100){
    return 'party time!!'
  } else {
    return 'i can handle this'
  }
}

boredom({
  david: "accounts",
  matt: "finance" 
})

boredom({tim: 'change', 
jim: 'accounts',
  randy: 'canteen', 
  sandy: 'change', 
  andy: 'change', 
  katie: 'IS',
  laura: 'change', 
  saajid: 'IS', 
  alex: 'trading', 
  john: 'accounts',
  mr: 'finance' }) 
  
  // 'kill me now');

boredom({ tim: 'IS', jim: 'finance',
  randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
  katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
  alex: 'regulation', john: 'accounts', mr: 'canteen' }) // 'i can handle this');

boredom({ tim: 'accounts', jim: 'accounts',
  randy: 'pissing about', sandy: 'finance', andy: 'change',
  katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
  john: 'retail', mr: 'pissing about' }) // 'party time!!')