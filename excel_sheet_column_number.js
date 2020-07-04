const createLookupTable = function() {
	const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	const chars = alphabet.split("")
	let table = {}
	for (let i = 0; i < chars.length; ++i)
		table[chars[i]] = i + 1
	return table
}

function titleToNumber(s) {
	let sum = 0
	let l = s.length
	const CHAR_TO_NUMBER = createLookupTable()
	for (let i = 0; i < l; ++i) {
		sum += CHAR_TO_NUMBER[s[i]] * Math.pow(26,(l - i - 1))
	}
	return sum
}

function testTitleToNumber(input, expect, f) {
	let result = f(input)
	let assert = expect === result
	console.log("Test ", input)
	console.log("Correct Result: ", assert)
	console.log(assert === true)
}
let input = ""
let expect = 0
console.log("Test titleToNumber")
input = "A"
expect = 1
testTitleToNumber(input, expect, titleToNumber)
input = "AA"
expect = 27
testTitleToNumber(input, expect, titleToNumber)
input = "ZY"
expect = 701
testTitleToNumber(input, expect, titleToNumber)
input = "AAA"
expect = 703
testTitleToNumber(input, expect, titleToNumber)
