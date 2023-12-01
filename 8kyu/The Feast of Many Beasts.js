// The Feast of Many Beasts - 8kyu (December 1st)

function feast(beast, dish) {
  if (dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length - 1])){
    return true
  } else {
    return false
  }
}

feast("great blue heron", "garlic naan") // true
feast("chickadee", "chocolate cake") // true
feast("brown bear", "bear claw") // false)