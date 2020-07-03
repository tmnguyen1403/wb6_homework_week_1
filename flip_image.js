/*
Flip image horizontally by
 reverse image's rows
 inverse reversed rows

Example 1:
Input: [[1,1,0],[1,0,1],[0,0,0]]
Output: [[1,0,0],[0,1,0],[1,1,1]]
Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

Example 2:
Input: [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
*/

const reverse = (A) => {
	let l = A.length - 1
	for (let index = 0; index < l / 2; ++index) {
		let tmp = A[index]
		A[index] = A[l - index]
		A[l - index] = tmp
	}
	return A
}

const inverse = (A) => {
	let index = 0
	for (let index = 0; index < A.length; ++index) {
		A[index] = A[index] ^ 1 //use bitwise xor to flip bit
	}
	return A
}

const flipAndInvertImage = (A) =>
    A.map(element => reverse(element)).map(element => inverse(element))

const test = (A, result, f) => {
	let B = f(A)
	let index = 0
	while (index < result.length) {
		if(B[index] !== result[index])
			return false
		index += 1
	}
	return true
}

const test2DArray = (A, result, f) => {
	let B = f(A)
	let row = 0
	while (row < result.length) {
		let col = 0
		while (col < result[row].length) {
			if (B[row][col] !== result[row][col])
				return false
			col += 1
		}
		row += 1
	}
	return true
}

console.log("Test Reverse Function")
let A = [1,1,0]
let result = [0,1,1]
console.assert(test(A, result, reverse) === true)
A = [1,0,0]
result = [0,0,1]
console.assert(test(A, result, reverse) === true)
A = [1,0,0,1,1,1]
result = [1,1,1,0,0,1]
console.assert(test(A, result, reverse) === true)
//console.log("Pass test reverse", A)
console.log("Test Inverse Function")
A = [0,0,0]
result = [1,1,1]
console.assert(test(A, result, inverse) === true)
A = [1, 0, 0]
result = [0,1,1]
console.assert(test(A, result, inverse) === true)
A = [1,0,1]
result = [0,1,0]
console.assert(test(A, result, inverse) === true)
//console.log("Pass test inverse", A)
console.log("Test flipAndInvertImage Function")
A = [[1,1,0],[1,0,1],[0,0,0]]
result = [[1,0,0],[0,1,0],[1,1,1]]
console.assert(test2DArray(A, result, flipAndInvertImage) === true)
A = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
result = [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
console.assert(test2DArray(A, result, flipAndInvertImage) === true)

console.log("Done testing")
