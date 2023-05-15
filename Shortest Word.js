Shortest Word - 7kyu (May 15th)

function findShort(s){
  const sortedArr = s.split(' ').sort((a,b) => a.length - b.length)

  return sortedArr[0].length
}

findShort("bitcoin take over the world maybe who knows perhaps")