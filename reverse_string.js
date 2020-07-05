/*
**Write a function that reverses a string. The input string is given as an array of characters char[].
**Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
**You may assume all the characters consist of printable ascii characters.
**
**Example 1
**Input: ["h","e","l","l","o"]
**Output: ["o","l","l","e","h"]
**
**Example 2
**Input: ["H","a","n","n","a","h"]
**Output: ["h","a","n","n","a","H"]
*/
const Test = require('./Test')

const reverseString = (s) => {
	let middle = Math.floor(s.length / 2)
	let right = s.length - 1
	let tmp = 0
	//swap characters between left and right position
	for (let left = 0; left < middle; ++left) {
		tmp = s[left]
		s[left] = s[right - left]
		s[right - left] = tmp
	}
}

function testReverseString(s, expect, f) {
	f(s)
	let assert = Test.compare1DArray(expect, s) === true
	console.log(`Test ${s}. \nExpect: ${expect}`)
	console.log(`Yield correct result? ${assert} \n`)
	console.assert(assert === true)
}

let s = ["1","2","3"]
let expect = ["3","2","1"]
testReverseString(s, expect, reverseString)
s = ["h","e","l","l","o"]
expect = ["o","l","l","e","h"]
testReverseString(s, expect, reverseString)
s = ["H","a","n","n","a","h"]
expect = ["h","a","n","n","a","H"]
testReverseString(s, expect, reverseString)
