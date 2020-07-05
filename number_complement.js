/*
**Given a positive integer num, output its complement number.
**The complement strategy is to flip the bits of its binary representation.
**
**Input: num = 5
**Output: 2
**Explanation: The binary representation of 5 is 101 (no leading zero bits),
**and its complement is 010. So you need to output 2.
**
**Input: num = 1
**Output: 0
**Explanation: The binary representation of 1 is 1 (no leading zero bits),
**and its complement is 0. So you need to output 0.
**/

/*Strategy:
**Find the maximum number depends on the number of of given input
**Perform XOR on max and input will yield input's complement
*/
var findComplement = function(num) {
    let k = 0
    let t = num
    let max = 0
		//find max
    while (t > 0) {
        max += (1 << k)
        t = t >> 1
        k += 1
    }
    return num ^ max
};

function testFindComplement(input, expect, f) {
	let result = f(input)
	console.log(`Test ${input}.\n\tExpect: ${expect}.\n\tResult: ${result}`)
	console.assert(expect === result)
}
console.log("Test findComplement")
let input = 5
let expect = 2
testFindComplement(input, expect, findComplement)
input = 1
expect = 0
testFindComplement(input, expect, findComplement)
