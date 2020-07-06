/*
**Given two strings s and t ,
**write a function to determine if t is an anagram of s.
**
**Example 1
**Input: s = "anagram", t = "nagaram"
**Output: true
**
**Example 2
**Input: s = "rat", t = "car"
**Output: false
**
**Note:
**You may assume the string contains only lowercase alphabets.
**
**Follow up:
**What if the inputs contain unicode characters?
**How would you adapt your solution to such case?
*/

//check length,
//not equal length, not anagram
//check number of occurence of each character in the string
function generateMapFrom(s) {
	let map = new Map()
	let c = ""
	for (let i = 0; i < s.length; ++i) {
		c = s[i]
		if ( map.has(c) ) {
			map.set(c, map.get(c) + 1)
		} else {
			map.set(c, 1)
		}
	}
	return map
}
const isAnagram = function(s, t) {
	if (s.length !== t.length)
		return false
	let mapS = generateMapFrom(s)
	let mapT = generateMapFrom(t)
	//compare two maps
	if (mapS.size !== mapT.size)
		return false
	for (let [key, value] of mapS) {
		if (!mapT.has(key) || mapT.get(key) !== value)
			return false
	}
	return true
}

function testIsAnagram(s, t, expect, f) {
	let result = f(s, t)
	console.log(`Test s: ${s}, t: ${t}`)
	console.log(`\tExpect: ${expect}.\n\tResult: ${result}`)
	console.assert(expect === result)
}

console.log("Test isAnagram")
let s = "ratrat"
let t = "carcar"
let expect = false
testIsAnagram(s, t, expect, isAnagram)

s = "anagram", t = "nagaram", expect = true
testIsAnagram(s, t, expect, isAnagram)
