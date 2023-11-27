// UEFA EURO 2016 - 8kyu (November 27th)

function uefaEuro2016(teams, scores){
  
  let result = ""

  if (scores[0] === scores[1]){
    result = 'teams played draw.'
  } else if (scores[0] > scores[1]){
    result = `${teams[0]} won!`
  } else if (scores[1] > scores[0]){
    result = `${teams[1]} won!`
  }
  return `At match ${teams[0]} - ${teams[1]}, ${result}`
  
}


uefaEuro2016(['Germany', 'Ukraine'], [2, 0]) // "At match Germany - Ukraine, Germany won!");
uefaEuro2016(['Belgium', 'Italy'], [0, 2]) // "At match Belgium - Italy, Italy won!");
uefaEuro2016(['Portugal', 'Iceland'], [1, 1]) // "At match Portugal - Iceland, teams played draw."
