// What dominates your array? - 7kyu (June 26th)

function dominator(arr) {
   const counts = arr.reduce((obj,item)=> {
      if (!obj[item]){
         obj[item] = 0
      }
      obj[item]++
      return obj
   },{})

   for (const prop in counts){
      if (counts[prop] > arr.length / 2){ 
         return Number(prop)
      }
   }
   return -1
}


dominator([3,4,3,2,3,1,3,3]) // 3
dominator([1,2,3,4,5]) // -1
dominator([1,1,1,2,2,2]) // -1
dominator([1,1,1,2,2,2,2]) // 2