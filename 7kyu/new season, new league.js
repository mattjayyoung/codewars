// New season, new league - 7kyu (October 15th)

function premierLeagueStandings(teamStandings) {
  
  let nextSeason = {}

  nextSeason[1] = teamStandings[1]

  const keys = Object.keys(teamStandings).slice(1)
  const sortedValues = Object.values(teamStandings).slice(1).sort()

 for (let i = 0; i < sortedValues.length; i++){
  nextSeason[keys[i]] = sortedValues[i]
 }

 return nextSeason
  
  
}

premierLeagueStandings({1:'Arsenal'}), {1:'Arsenal'}, // 'Should return Arsenal as position 1')

premierLeagueStandings({2:'Arsenal', 3:'Accrington Stanley', 1:'Leeds United'}),

// {3:'Arsenal', 2:'Accrington Stanley', 1:'Leeds United'}, // 'Should return team in position 1 last season as #1 and all other teams in alphabetical order!')

premierLeagueStandings({1:'Leeds United', 2:'Liverpool', 3:'Manchester City', 4:'Coventry', 5:'Arsenal'})

// {1:'Leeds United', 2:'Arsenal', 3:'Coventry', 4:'Liverpool', 5:'Manchester City'} // 'Should return team in position 1 last season as #1 and all other teams in alphabetical order!'