// Stone Pickaxe Crafting - 7kyu (March 11th)

function stonePick(arr) {

  let count = 0

  const obj = arr.reduce((acc,curr) => {
    if (acc.hasOwnProperty(curr)){
      acc[curr]++
    } else {
      acc[curr] = 1
    }
   return acc 
  }, {})
                                          
  for (prop in obj){
    if (obj['Wood']){
      obj['Sticks'] = obj['Wood'] * 4
    }
  }

 for (let i = 1; i <= 200; i++) {
  
  const propertyName = `property${i}`;

  // Add the empty property to the object
  obj[propertyName] = undefined;
}

 for (prop in obj){
  if (Number(obj['Cobblestone']) >= 3 && Number(obj['Sticks']) >= 2){
    console.log(obj['Cobblestone'])
    console.log(obj['Sticks'])
    count++
    obj['Cobblestone'] -= 3
    obj['Sticks'] -= 2
  } 
 }

 return count
}



stonePick([
  'Wood',        'Wood',
  'Cobblestone', 'Cobblestone',
  'Cobblestone', 'Cobblestone',
  'Cobblestone', 'Cobblestone',
  'Cobblestone', 'Cobblestone',
  'Cobblestone', 'Cobblestone',
  'Cobblestone', 'Cobblestone'
])

stonePick(["Sticks", "Wool", "Cobblestone"])
stonePick([])
stonePick(["Wood", "Cobblestone", "Cobblestone", "Cobblestone"]) // 1
stonePick(["Sticks", "Sticks", "Cobblestone", "Cobblestone", "Cobblestone"])
stonePick(["Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Wood"])


Returned: 2