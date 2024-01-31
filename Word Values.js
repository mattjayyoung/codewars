// Word Values - 7kyu (January 31st)

function wordValue(arr) {
  return arr.map(el => {
    const matchedChars = el.match(/[^\s]/ig);

    return matchedChars ? 
      matchedChars
        .map((char, i) => char.charCodeAt(0) - 96)
        .reduce((acc, curr) => acc + curr, 0)
      : 0;
  }).map((num, i) => num * (i + 1));
}


wordValue(["abc abc","abc abc","abc","abc"]) // [12,24,18,24]

wordValue(["abc2", "abc"])


wordValue(["codewars","abc","xyz"]) // [88,12,225]
