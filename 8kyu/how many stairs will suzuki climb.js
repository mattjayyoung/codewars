// How many stairs will Suzuki climb in 20 years? - 8kyu (January 4th)

function stairsIn20(s){
  return s.flat().reduce((acc,curr) => acc + curr) * 20
}