// Pythagorean Triple - 8kyu (March 9th)

function isPythagoreanTriple(integers) {
  if (integers[2] ** 2 === integers[0] ** 2 + integers[1] ** 2){
    return true;
    } else if (integers[1] ** 2 === integers[0] ** 2 + integers[2] ** 2){
      return true
    } else if (integers[0] ** 2 === integers[1] ** 2 + integers[2] ** 2){
      return true
    } else {
      return false
    }
}

isPythagoreanTriple([3, 4, 5]) // true
isPythagoreanTriple([3, 5, 9]) // false