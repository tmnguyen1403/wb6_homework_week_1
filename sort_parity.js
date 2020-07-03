// Solution
// create two array for even and odd number
// loop through each element:
// if even number, save element in even array
// if odd number, save element in odd array

const isEven = number => number % 2 === 0
//This code is 72.91 % faster on leetcode
//Memory usage: 39.2 MB
const sortArrayByParity = (A) => {
	let even_array = []
	let odd_array = []
	//use "for of" loop to loop through value
	//"for in" loop will yield value as string, not number
	for (let x of A) {
		if (isEven(x))
			even_array.push(x)
		else
			odd_array.push(x)
	}
	return even_array.concat(odd_array)
}
const test = (A, result) => {
	let B = sortArrayByParity(A)
	let index = 0
	while (index < B.length) {
		if (B[index] !== result[index])
			return false
		index += 1
	}
	return true
}
console.log("Start test")
//test all even
let A = [0,2,4,6]
let result = [0,2,4,6]
console.assert(test(A,result) === true)
console.log("Pass even test")
//test all odd
A = [1,3,5,7]
result = [1,3,5,7]
console.assert(test(A,result) === true)
console.log("Pass odd test")
//test even odd
A = [2,4,6,1,3,5,7]
result = [2,4,6,1,3,5,7]
console.assert(test(A,result) === true)
console.log("Pass even odd test")
//test odd even
A = [1,3,5,4,8,8,2]
result = [4,8,8,2,1,3,5]
console.assert(test(A,result) === true)
console.log("Pass odd even test")
//test mix
A = [1,3,5,4,3,7,2,1]
result = [4,2,1,3,5,3,7,1]
console.assert(test(A,result) === true)
console.log("Pass mix test 1")
A = [10,20,39,50,1,3,5,4,3,7,2,1]
result = [10,20,50,4,2,39,1,3,5,3,7,1]
console.assert(test(A,result) === true)
console.log("Pass mix test 2")
console.log("End test")


//This is slow code, only 18% faster on leetcode
// const sortArrayByParity = (A) => {
// 	let current_index = 0
// 	let even_index = 0
// 	let odd_index = A.length - 1
// 	let B = Array(A.length)
// 	while (current_index < A.length) {
// 		let element = A[current_index]
// 		if (isEven(element)) {
// 			B[even_index] = element
// 			even_index += 1
// 		}
// 		else {
// 			B[odd_index] = element
// 			odd_index -= 1
// 		}
// 		current_index += 1
// 	}
// 	return B
// }
