/*
find number of friend's circles
use union_find data structure

Input:
[[1,1,0],
 [1,1,0],
 [0,0,1]]
Output: 2
Explanation:The 0th and 1st students are direct friends, so they are in a friend circle.
The 2nd student himself is in a friend circle. So return 2.

Input:
[[1,1,0],
 [1,1,1],
 [0,1,1]]
Output: 1
Explanation:The 0th and 1st students are direct friends, the 1st and 2nd students are direct friends,
so the 0th and 2nd students are indirect friends. All of them are in the same friend circle, so return 1.
*/

const test1D = (A, B) => {
	if ( A.length != B.length)
		return false
	for (let i = 0; i < A.length; ++i) {
		if (A[i] != B[i])
			return false
	}
	return true
}

const findRoot = (x, p) => {
	if ( p[x] !== x)
		p[x] = findRoot(p[x], p)
	return p[x]
}

const union = (x, y, p) => {
		let x_root = findRoot(x, p)
		let y_root = findRoot(y, p)
		p[x_root] = y_root
}

const findCircleNum = (M) => {
	let max_row = M.length
	let max_col = M[0].length
	let parent = []
	//initialize parent array
	for (let i = 0; i < max_row; ++i) {
		parent.push(i)
	}
	//update node's root for each edge
	for (let row = 0; row < max_row; ++row) {
		for (let col = 0; col < max_col; ++col) {
			if ( M[row][col] === 1) {
				union(row, col, parent)
				M[col][row] = 0
			}
		}
	}
	//final update to node's root
	//to get to the highest root for each node
	for (let i = 0; i < parent.length; ++i) {
		parent[i] = findRoot(parent[i], parent)
	}
	//use Set to eliminate duplicated roots in parent array
	let S = new Set(parent)
	return S.size
}

console.log("Test findRoot")
let p = [1,2,3,3]
let result = [3,3,3,3]
console.assert(findRoot(0, p) === 3)
console.assert(test1D(p, result) === true)

console.log("Test union")
p = [0,1,2,3,4]
result = [3,1,2,3,4]
union(0,3,p)
console.assert(test1D(p, result) === true)

console.log("Test findCircleNum")
let M = [[1,1,0],
 [1,1,0],
 [0,0,1]]
console.assert(findCircleNum(M) === 2)
M = [[1,0,0],[0,1,0],[0,0,1]]
console.assert(findCircleNum(M) === 3)

M = [[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]]
console.assert(findCircleNum(M) === 3)
