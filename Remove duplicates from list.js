// Remove duplicates from list - 8kyu (August 11th)

function distinct(a){
  let newA = new Set(a)
  return Array.from(newA)
}