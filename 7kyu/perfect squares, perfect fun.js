// Perfect squares, perfect fun (7kyu) - Sept 12th 

function squareIt(int) {

	const digitCount = int.toString().length

	if (Number.isInteger(Math.sqrt(digitCount))){
		const split = int.toString().split('')
		let result = ""


		for (let i = 0; i < digitCount; i += Math.sqrt(digitCount)){
			result += split.slice(i, i + Math.sqrt(digitCount)).join('') + '\n'
			
		}
	

		return result.slice(0, result.length - 1)
	} else {
		return "Not a perfect square!"
	}
}

// 1, 4, 9, 16, 25, 36

squareIt(1) // "1")
squareIt(222) // "Not a perfect square!");
squareIt(234562342342) // "Not a perfect square!");
squareIt(88989) // "Not a perfect square!");
squareIt(112141568) // "112\n141\n568");