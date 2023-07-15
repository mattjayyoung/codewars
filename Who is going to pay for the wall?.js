// Who is going to pay for the wall? - 8kyu (July 15th)

function whoIsPaying(name){
  return name.length > 2 ? [name, name[0] + name[1]] : [name]
}

whoIsPaying("Mexico") // ["Mexico", "Me"]
whoIsPaying("Melania") // ["Melania", "Me"]
whoIsPaying("Melissa") // ["Melissa", "Me"]
whoIsPaying("Me") // ["Me"]
whoIsPaying("") // [""]
whoIsPaying("I") // ["I"]