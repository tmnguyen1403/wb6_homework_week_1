/*
 *Given a non-empty array of digits representing a non-negative integer,
 *plus one to the integer.The digits are stored such that the most significant
 *digit is at the head of the list, and each element in the array
 *contain a single digit.
 *You may assume the integer does not contain any leading zero,
 *except the number 0 itself.
 *
 *Example 1
 *	Input: [1,2,3]
 *	Output: [1,2,4]
 *	Explanation: The array represents the integer 123.
 *
 *Example 2
 *	Input: [4,3,2,1]
 *	Output: [4,3,2,2]
 *	Explanation: The array represents the integer 4321.
*/
const Test = require('./Test')

const plusOne = (digits) => {
	let carry = 1
	let new_digit = 0
	for(let index = digits.length - 1; index >= 0; --index) {
		new_digit = digits[index] + carry
		digits[index] = new_digit % 10
		carry = Math.floor(new_digit / 10)
		if (carry === 0)
			break
	}
	//if has 0 digit at the first index
	//insert 1 into the first position of the array
	if (carry === 1)
		digits.unshift(carry)
	return digits
}

function testPlusOne(input, expect, f) {
	console.log("Test input: ", input)
	let result = f(input)
	let assert = Test.compare1DArray(input, expect)
	console.log("Yield Correct Result? ", assert)
	console.assert(assert === true)
}
console.log("Test plusOne")
let input = [1,2,3]
let expect = [1,2,4]
testPlusOne(input, expect, plusOne)
input = [4,3,2,1]
expect = [4,3,2,2]
testPlusOne(input, expect, plusOne)
input = [9]
expect = [1,0]
testPlusOne(input, expect, plusOne)
input = [0]
expect = [1]
testPlusOne(input, expect, plusOne)
input = [1,8,9]
expect = [1,9,0]
testPlusOne(input, expect, plusOne)
input = [9,9,9,9]
expect = [1,0,0,0,0]
testPlusOne(input, expect, plusOne)
