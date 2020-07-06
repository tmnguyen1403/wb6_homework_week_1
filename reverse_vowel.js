/*
**Write a function that takes a string as input and reverse only the vowels of a string.
**Example 1:
**
**Input: "hello"
**Output: "holle"
**Example 2:
**
**Input: "leetcode"
**Output: "leotcede"
**Note:
**The vowels does not include the letter "y".
*/

function isVowel(c) {
	let vowels = "aeiou"
	return vowels.includes(c.toLowerCase())
}

/*SOLUTION1
**
**Split the string into array of characters
**If a vowel is found on the left position
**Search for a vowel on the right position
**If found, swap left and right
**If not found, stop
*/
/*SOLUTION2
**
**Store all vowel indices in an array
**Use the array to swap left and right vowel
*/

function reverseVowels(s) {
	let s_arr = s.split("")
	let vowel_indices = []
	//store vowel's index into an array
	s_arr.forEach( (c, index) => {
		if ( isVowel(c) )
			vowel_indices.push(index)
	})
	//swap vowel using indices' array
	let mid = Math.floor(vowel_indices.length / 2)
	let right = vowel_indices.length - 1
	let tmp = ""
	for (let left = 0; left < mid; ++left) {
		tmp = s_arr[vowel_indices[left]]
		s_arr[vowel_indices[left]] = s_arr[vowel_indices[right - left]]
		s_arr[vowel_indices[right - left]] = tmp
	}
	return s_arr.join("")
}

function testReverseVowels(s, expect, f) {
	let result = f(s)
	console.log(`Test s: ${s}\n\tExpect: ${expect}\n\tResult: ${result}`)
	console.assert(expect === result)
}

console.log("Test reverseVowels")
let s = "hello"
let expect = "holle"
testReverseVowels(s, expect, reverseVowels)

s = "leetcode"; expect = "leotcede"
testReverseVowels(s, expect, reverseVowels)

s = "lytco"; expect = "lytco"
testReverseVowels(s, expect, reverseVowels)

s = "lyutcoabcde"; expect = "lyetcaobcdu"
testReverseVowels(s, expect, reverseVowels)

s = "aA"; expect = "Aa"
testReverseVowels(s, expect, reverseVowels)
