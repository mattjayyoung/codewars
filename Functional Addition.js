// Funcitonal Addition - 7kyu (March 17th)

function add(n) {
  return function addN(m){
    return n + m
  }
}

add(1)(3) // 4
