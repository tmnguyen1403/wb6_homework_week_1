/*
**Given an integer, write a function to determine
**if it is a power of two.
**
**Example 1
**Input: 1
**Output: true
**Explanation: 2^0 = 1
**
**Example 2
**Input: 16
**Output: true
**Explanation: 24 = 16
**
**Example 3
**Input: 218
**Output: false
**
*/

const isPowerOfTwo = (n) => {
	//special cases
	if (n <= 0 || n === 3)
		return false
	if (n === 1 || n === 2)
		return true
	//divided n by two until
	//encounter an odd number is not 1 =>  not a power of two
	//encounter 1 => a power of two
	let k = n
	while (k !== 1) {
		if (k % 2 !== 0)
			return false
		k = k >> 1
	}
	return true
}

function testPowerOfTwo(A, f) {
	A.forEach(n => console.log(`is ${n} power of true? `,f(n)))
}
let A = [-1, 0, 1, 2, 3, 4, 5, 16, 218]
testPowerOfTwo(A, isPowerOfTwo)
