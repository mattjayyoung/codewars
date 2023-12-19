// pick a set of first elements - 8kyu (Dec 19th)

function first(arr, n = 1) {
  return n === 0 ? [] : arr.slice(0, n)
}

const arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];