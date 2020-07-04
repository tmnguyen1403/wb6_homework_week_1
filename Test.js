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

module.exports = {
	helloWorld,
	compare1DArray
}
