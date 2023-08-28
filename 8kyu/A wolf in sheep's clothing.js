// A wolf in sheep's clothing - 8kyu (Aug 27th)

// ** Outputs the correct answer, the kata did not accept for some reason

function warnTheSheep(queue) {

  const wolfPosition = queue.indexOf('wolf')

  if ((queue.length - wolfPosition - 1) === 0){
    return "Pls go away and stop eating my sheep"
  } 
    return `"Oi! Sheep number ${queue.length - wolfPosition - 1}! You are about to be eaten by a wolf!"`
}


warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"])
warnTheSheep(["sheep", "sheep", "wolf"])



warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"])
		"Oi! Sheep number 5! You are about to be eaten by a wolf!"

warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"])
		"Oi! Sheep number 6! You are about to be eaten by a wolf!"
	);
warnTheSheep(["sheep", "wolf", "sheep"])
		"Oi! Sheep number 1! You are about to be eaten by a wolf!"
	);
warnTheSheep(["wolf"])
		"Pls go away and stop eating my sheep"
	);
warnTheSheep(["sheep", "sheep", "wolf"])
		"Pls go away and stop eating my sheep"