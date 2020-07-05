/*
**Given a word, you need to judge whether the usage of capitals in it is right or not.
**
**We define the usage of capitals in a word to be right when one of the following cases holds:
**
**All letters in this word are capitals, like "USA".
**All letters in this word are not capitals, like "leetcode".
**Only the first letter in this word is capital, like "Google".
**Otherwise, we define that this word doesn't use capitals in a right way.
**
**Example 1
**Input: "USA"
**Output: True
**
**Example 2
**Input: "FlaG"
**Output: False
**
**Note: The input will be a non-empty word consisting of uppercase and lowercase latin letters.
*/

function isCapital(c) {
	const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	return ALPHABET.includes(c)
}

const detectCapitalUse = (word) => {

	if (word.length === 1)
		return true
	//check if the first char is a capital character
	let result = isCapital(word[0])
	let index = 1
	//if first letter now is a capital,
	//check the second char to determine
	// if we need to check for all lowercase or uppercase
	if (result) {
		result = isCapital(word[1])
		index += 1
	}
	//loop through the rest of the characters in the string
	//if detect any char has different case than the 2nd char,
	// return false
	for(; index < word.length; ++index){
		if (result !== isCapital(word[index]))
			return false
	}
	return true
}

function testDetectCapitalUse(word, expect, f) {
	let result = f(word)
	console.log(`Test ${word}. \n\tExpect: ${expect} \n\tResult: ${result}`)
	console.assert(expect === result)
}

console.log("Test detectCapitalUse\n")

let word = "USA"
let expect = true
testDetectCapitalUse(word, expect, detectCapitalUse)
word = "FlaG"
expect = false
testDetectCapitalUse(word, expect, detectCapitalUse)
word = "G"
expect = true
testDetectCapitalUse(word, expect, detectCapitalUse)
word = "g"
expect = true
testDetectCapitalUse(word, expect, detectCapitalUse)
word = "geefefsfafa"
expect = true
testDetectCapitalUse(word, expect, detectCapitalUse)
word = "GA"
expect = true
testDetectCapitalUse(word, expect, detectCapitalUse)
word = "Gb"
expect = true
testDetectCapitalUse(word, expect, detectCapitalUse)
word = "HbH"
expect = false
testDetectCapitalUse(word, expect, detectCapitalUse)
word = "HHb"
expect = false
testDetectCapitalUse(word, expect, detectCapitalUse)
