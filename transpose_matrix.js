// Transpose of matrix
/*
Square matrix
Input: [[1,2,3], [4,5,6], [7,8,9]]
Output: [[1,4,7], [2,5,8], [3,6,9]]

Not square
Input:  [[1,2,3], [4,5,6]]
Output: [[1,4], [2,5], [3,6]]
*/
//deter mine row x column of the matrix
// the new matrix size is column x row

const transpose = function(A) {
	//assume A is a valid matrix, ignore checking
	const row = A.length
	const col = A[0].length
	const B = []

	let col_index = 0
	while (col_index < col) {
		let new_row = []
		let row_index = 0
		while (row_index < row) {
			new_row.push(A[row_index][col_index])
			row_index += 1
		}
		B.push(new_row)
		col_index += 1
	}
	return B
}

const test = (A, result, f) => {
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

let A = [[1,2,3], [4,5,6], [7,8,9]]
let result = [[1,4,7], [2,5,8], [3,6,9]]
console.assert(test(A, result, transpose) === true)
console.log("Pass test:", A)
A = [[1,2,3], [4,5,6]]
result = [[1,4], [2,5], [3,6]]
console.assert(test(A, result, transpose) === true)
console.log("Pass test:", A)
