// Alternate capitalization (7kyu) - October 7th

function capitalize(s){
  const even = Array.from(s).map((char, i) => i % 2 === 0 ? char.toUpperCase() : char).join('')
  const odd = Array.from(s).map((char, i) => i % 2 !== 0 ? char.toUpperCase() : char).join('')

  return [even, odd]
};

capitalize("abcdef") = ['AbCdEf', 'aBcDeF']