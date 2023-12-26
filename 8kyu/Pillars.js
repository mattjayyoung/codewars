// Pillars - 8kyu (December 26th)

function pillars(numPill, dist, width) {

  dist = dist * 100
      
  let result = ((numPill - 1) * dist) + (width * (numPill - 2))
  
  return result < 0 ? 0 : result
  
}

pillars(1, 10, 10) // 0)
pillars(2, 20, 25)  // 2000
pillars(11, 15, 30) // 15270