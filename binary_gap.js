function getLeastSignificantBit(number) {
	return number & 1
}

// let t = 22
// while (t > 0) {
// 	console.log(t & 1)
// 	t = t >> 1
// }
var binaryGap = function(N) {
    let distance = -1
		let max_distance = 0
		let first_1 = -1
		let second_1 = -1
		let bit = 0
		while ( N > 0 ) {
			bit = getLeastSignificantBit(N)
			console.log(bit)
			if (bit === 1) {
				if (first_1 === - 1)
					first_1 = 1
				else {
					second_1 = 1
					max_distance = max_distance < distance + 1 ? distance + 1 : max_distance
					first_1 = 1
					distance = -1
				}
			}
			if (first_1 === 1)
				distance += 1
			N = N >> 1
		}
		return max_distance
};

function testBinaryGap(N, expect, f) {
	let result = f(N)
	console.log(`Test N = ${N}.\n\tExpect: ${expect}.\n\tResult: ${result}`)
	console.assert(expect === result)
}
let N = 22
let expect = 2
testBinaryGap(N, expect, binaryGap)
N = 13
expect = 2
testBinaryGap(N, expect, binaryGap)
