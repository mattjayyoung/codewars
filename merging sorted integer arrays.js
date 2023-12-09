// Merging sorted integer arrays (without duplicats) - 8kyu (December 9th)

function mergeArrays(a, b) {
  return Array.from(new Set(a.concat(...b))).sort((a,b) => a - b)
}
