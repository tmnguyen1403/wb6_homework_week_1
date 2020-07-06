
function isAlphabet(c) {
	let lower_alpha = "abcdefghijklmnopqrstuvwxyz"
	return lower_alpha.includes(c.toLowerCase())
}

function isNumeric(c) {
    let nums = "0123456789"
    return nums.includes(c)
}

//preprocessed the string
//remove all non-alphabetical and non-numeric characters

function removeNoneAlphabet(s) {
	let new_s = []
	let c = ""
	for (let i = 0; i < s.length; ++i) {
		c = s[i]
		if ( isAlphabet(c) || isNumeric(c) ) {
			new_s.push(c.toLowerCase())
		}
	}
	return new_s
}

function isPalindrome(s) {
	let new_s = removeNoneAlphabet(s)
	let mid = Math.floor(new_s.length / 2)
	let right = new_s.length - 1
	for (let left = 0; left < mid; ++left) {
		if (new_s[left] !== new_s[right - left]) {
			return false
		}
	}
	return true
}

function testIsPalindrome(s, expect, f) {
	let result = f(s)
	console.log(`Test s: ${s}\n\tExpect: ${expect}.\n\tResult: ${result}`)
	console.assert(expect === result)
}
//compare left and right characters in the string
//if found different, not anagram
let s = "A man, a plan, a canal: Panama"
let expect = true
testIsPalindrome(s, expect, isPalindrome)
s = ""; expect = true
testIsPalindrome(s, expect, isPalindrome)
s = "a"; expect = true
testIsPalindrome(s, expect, isPalindrome)
s = "ab"; expect = false
testIsPalindrome(s, expect, isPalindrome)
s = "0P"; expect = false
testIsPalindrome(s, expect, isPalindrome)
s = "0P0"; expect = true
testIsPalindrome(s, expect, isPalindrome)
