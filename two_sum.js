const Test = require("./Test")

const twoSum = (nums, target) => {
	//create hashmap table for each value with its index
	let map = new Map()
	nums.forEach((x, index) => map.set(x, index))
	//search indices
	let a = 0
	let l = nums.length - 1
	for (let index = 0; index < l ; ++index) {
		a = target - nums[index]
		if (map.has(a) && map.get(a) !== index)
			return [index, map.get(a)]
	}
}

function testTwoSum(nums, target, expect, f) {
	let result = f(nums, target)
	console.log(`Test nums: ${nums}; target: ${target}.`)
	console.log(`\tExpect: ${expect}.\n\tResult: ${result}`)
	console.assert(Test.compare1DArray(expect, result))
}

let nums = [2, 7, 11, 15]
let target = 9
let expect = [0, 1]
testTwoSum(nums, target, expect, twoSum)

nums = [3, 2, 4]
target = 6
expect = [1, 2]
testTwoSum(nums, target, expect, twoSum)

nums = [3, 3]
target = 6
expect = [0, 1]
twoSum(nums, target)
