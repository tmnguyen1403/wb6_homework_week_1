
//use the first string as a template
//compare each char of the first string with other strings
//stop the loop when found different
//Copy the prefix from the beginning to the stop index
function longestCommonPrefix(strs) {
	if ( strs.length === 0)
		return ""
	if ( strs.length === 1)
		return strs[0]

	let first_string = strs[0]
	let array = []
	let c = ""
	for (let left = 0; left < first_string.length; ++left) {
		c = first_string[left]
		array = strs.filter(str => str[left] === c)
		//find the different
		if ( array.length !== strs.length ) {
			return first_string.slice(0, left)
		}
	}
	//all strings are the same
	return first_string
}

function testLongestCommonPrefix(strs, expect, f) {
	let result = f(strs)
	console.log(`Test ${strs}.\n\tExpect: ${expect}\n\tResult: ${result}`)
	console.assert(expect === result)
}

console.log("Test longestCommonPrefix")
let strs = ["flower","flow","flight"]
let expect = "fl"
testLongestCommonPrefix(strs, expect, longestCommonPrefix)
strs = ["hello", "hello", "hello"]
expect = "hello"
testLongestCommonPrefix(strs, expect, longestCommonPrefix)
strs = ["", "he", "hello"]
expect = ""
testLongestCommonPrefix(strs, expect, longestCommonPrefix)
