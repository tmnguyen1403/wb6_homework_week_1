/*
**Given a non-empty array of integers, every element appears twice except for one. Find that single one.
**
**Note:
**
**Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
**Example 1:
**Input: [2, 2, 1]
**Output: 1
**
**Example 2:
**Input: [4,1,2,1,2]
**Output: 4
*/

var singleNumber = (nums) => nums.reduce((acc, x) => acc ^ x)

function testSingleNumber(nums, expect, f) {
	let result = f(nums)
	console.log(`Test array: ${nums}.\n\tExpect: ${expect}.\n\tResult: ${result}`)
	console.assert(expect === result)
}

let nums = [2, 2, 1]
let expect = 1
testSingleNumber(nums, expect, singleNumber)
nums = [4, 1, 2, 1, 2]
expect = 4
testSingleNumber(nums, expect, singleNumber)
