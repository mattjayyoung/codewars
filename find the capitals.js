//Find the Capitals - 7kyu (June 24th)

function capitals (word) {

	return word.split('').map((char,i,arr) => char === char.toUpperCase() ? arr.indexOf(char) : 'boob').filter(num => typeof num === 'number')

};

capitals('CodEWaRs') // [0,3,4,6]