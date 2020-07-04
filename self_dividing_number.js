/*
A self-dividing number is a number
that is divisible by every digit it contains.
Cannot contain 0 digit

Input:
left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
*/

/*
Observation:
*/
const Test = require("./Test")
const MIN = 1
const MAX = 10000

const outOfbound = (a, min, max) => (a < min || a > max)

function getDigit(number) {
	let digits = []
	let b = number
	let remainder = 0
	while (b !== 0) {
		remainder = b % 10
		b = Math.floor(b / 10)
		//insert remainder at the beginning of the list
		digits.unshift(remainder)
	}
	return digits
}

//check for zero digits
// change 0 to 1
// create number
function digitToNumber(digits) {
	let number = 0
	let one = - 1
	for (let i = 0; i < digits.length; ++ i) {
		if (digits[i] === 0 || one === 1) {
			digits[i] = 1
			one = 1
		}
		number += digits[i] * Math.pow(10, digits.length - i - 1)
	}
	return number
}

const selfDividingNumbers = (left, right) => {
	if ( outOfbound(left, MIN, MAX)
		|| outOfbound(right, MIN, MAX)
		|| left > right ){
		return []
	}
	//since there is not zero in self-divding number,
	//we start with 1
	let digits = getDigit(left)
	let number = digitToNumber(digits)

	let result = []
	let divisible = []
	// start checking number
	while (number <= right) {
		//update digits when encounter 0
		if (number % 10 === 0) {
			digits = getDigit(number)
			number = digitToNumber(digits)
		}
		else {
			divisible = digits.filter(digit => number % digit !== 0)
			if (divisible.length === 0) {
				result.push(number)
			}
			number += 1
			digits[digits.length - 1] += 1
		}
	}
	return result
}

console.log("Test selfDividingNumbers")
let left = 3056
let right = 4813


let expected = [3111,3126,3132,3135,3144,3162,3168,3171,3195,3216,3222,3264,3276,3288,3312,3315,3324,3333,3336,3339,3366,3384,3393,3432,3444,3492,3555,3612,3624,3636,3648,3666,3717,3816,3864,3888,3915,3924,3933,3996,4112,4116,4124,4128,4144,4164,4172,4184,4212,4224,4236,4244,4248,4288,4332,4344,4368,4392,4412,4416,4424,4444,4448,4464,4488,4632,4644]
let result = selfDividingNumbers(left, right)
let isCorrect = Test.compare1DArray(expected, result)
console.log(`Left: ${left}, Right: ${right}`)
console.log(`Correct Result: ${isCorrect}\n`)
console.assert(isCorrect === true)

//
left = 1
right = 22

expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12,15, 22]
result = selfDividingNumbers(left, right)
isCorrect = Test.compare1DArray(expected, result)
console.log(`Left: ${left}, Right: ${right}`)
console.log(`Correct Result: ${isCorrect}\n`)
console.assert(isCorrect === true)
