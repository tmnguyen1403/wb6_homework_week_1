/*
This file is used for implementing testing functions
*/
function helloWorld() {
	console.log("Hello World")
}

function compare1DArray(A, B) {
	if ( A.length != B.length)
		return false
	for (let i = 0; i < A.length; ++i) {
		if (A[i] != B[i])
			return false
	}
	return true
}

function compare2DArray(A, B) {
	if (A.length != B.length)
		return false
	for (let i = 0; i < A.length; ++i) {
		if (compare1DArray(A[i], B[i]) === false)
			return false
	}
	return true
}

function print2DArray(A) {
	A.forEach(row => console.log(row.join(" ")))
}
module.exports = {
	helloWorld,
	compare1DArray,
	compare2DArray,
	print2DArray
}
