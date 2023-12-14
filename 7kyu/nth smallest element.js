// Nth Smallest Element - 7kyu (December 13th)

function nthSmallest(arr, pos){
  arr = arr.sort((a,b) => a - b)

  return arr[pos - 1]
}

nthSmallest([3,1,2], 2)//  2);
nthSmallest([15,20,7,10,4,3], 3) //  7
nthSmallest([-5,-1,-6,-18], 4) // -1
nthSmallest([-102,-16,-1,-2,-367,-9], 5)// -2
nthSmallest([2,169,13,-5,0,-1], 4) //  2
nthSmallest([2,1,3,3,1,2], 3) //  2