/*
**The Hamming distance between two integers is
**the number of positions at which the corresponding bits are different.
**Given two integers x and y, calculate the Hamming distance.
**
**Note:
**0 ≤ x, y < 231.
**Input: x = 1, y = 4
**Output: 2
**Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
The above arrows point to positions where the corresponding bits are different.
**/
function getLeastSignificantBit(number){
	return number & 1
}

var hammingDistance = function(x, y) {
	let nb_diff = 0
	let x_b = 0
	let y_b = 0
	while (x | y) {
		x_b = getLeastSignificantBit(x)
		y_b = getLeastSignificantBit(y)
		nb_diff += (x_b !== y_b) ? 1 : 0
		x = x >> 1
		y = y >> 1
	}
	return nb_diff
}

function testHammingDistance(x, y, expect, f) {
	let result = f(x,y)
	console.log(`Test x=${x} y=${y}\n`)
	console.log(`\tExpect: ${expect}\n\tResult: ${result}`)
	console.assert(expect === result)
}
let x = 1
let y = 4
let expect = 2
testHammingDistance(x, y, expect, hammingDistance)
x = 20; y = 19; expect = 3
testHammingDistance(x, y, expect, hammingDistance)
