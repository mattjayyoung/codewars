// Duck Duck Goose (8kyu) - February 15th

function duckDuckGoose(players, goose) {  
  if (goose <= players.length + 1){
    return players[goose - 1].name
  } else {
    for (let i = goose; i > 0; i -= players.length){
      if (players[i - 1]){
        return players[i - 1].name
      }
    }
  }
}

