/*
**Given a string, you need to reverse
**the order of characters in each word within a
**sentence while still preserving whitespace and initial word order.
**
**Example 1:
**Input: "Let's take LeetCode contest"
**Output: "s'teL ekat edoCteeL tsetnoc"
*/

//Reuse reverse_string function from reverse_string.js
//modified input of the function
const reverseString = (word) => {

	let s = word.split("")
	let middle = Math.floor(s.length / 2)
	let right = s.length - 1
	let tmp = 0
	//swap characters between left and right position
	for (let left = 0; left < middle; ++left) {
		tmp = s[left]
		s[left] = s[right - left]
		s[right - left] = tmp
	}

	return s.join("")
}

const reverseWords = (s) => {
	let words = s.split(" ")
	let reversed = words.map(word => reverseString(word))
	return reversed.join(" ")
}

function testReverseWords(s, expect, f) {
	let result = f(s)
	console.log(`Test s=${s}.\n\tExpect: ${expect}.\n\tResult: ${result}`)
	console.assert(result === expect)
}

let s = "Let's take LeetCode contest"
let expect = "s'teL ekat edoCteeL tsetnoc"
testReverseWords(s, expect, reverseWords)
s = "hello"; expect = "olleh"
testReverseWords(s, expect, reverseWords)
