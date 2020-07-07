
const Test = require('./Test')

function findRoot(roots, row, col) {
	let directions = [[-1, 0], [0, -1], [1, 0], [0, 1]] //top, left, bottom, right
	for (let [x, y] of directions) {
		let r = row + x
		let c = col + y
		if (roots[r] && roots[r][c] !== undefined)
			return roots[r][c]
	}
}

function connectLand(M, row, col, roots) {
		const LAND = "1"
		if ( M[row] === undefined
			|| M[row][col] === undefined
			|| M[row][col] !== LAND)
			return
		let directions = [[-1, 0], [0, -1], [1, 0], [0, 1]] //top, left, bottom, right
		for (let [x, y] of directions) {
			let r = row + x
			let c = col + y
			if (M[r] && M[r][c] === LAND && roots[r][c] === undefined) {
				roots[r][c] = roots[row][col]
				connectLand(M, r, c, roots)
			}
		}
}

const numIslands = (M) => {
	const LAND = "1"
	if (M.length === 0 || M[0].length === 0)
		return 0
	let max_row = M.length
	let max_col = M[0].length
	let roots = []
	M.forEach((x) => roots.push([]))
	let nb_islands = 0
	for (let row = 0; row < max_row; ++row) {
		for (let col = 0; col < max_col; ++col) {
			if (M[row][col] === LAND && roots[row][col] === undefined) {
				roots[row][col] = findRoot(roots, row, col)
				//a new island appears
				if (roots[row][col] === undefined) {
					nb_islands += 1
					roots[row][col] = nb_islands
					//expand to adjacent nodes
					connectLand(M, row, col, roots)
				}
			}
		}
	}
	return nb_islands
}

function testNumIslands(M, expect, f) {
	let result = f(M)

	console.log("Test:")
	Test.print2DArray(M)
	console.log(`\tExpect: ${expect}\n\tResult: ${result}`)
	console.assert(expect === result)
}

let M = []
let expect = 0
M = [	["1","1","1","1","0"],
			["1","1","0","1","0"],
			["1","1","0","0","0"],
			["0","0","0","0","0"]]
expect = 1
testNumIslands(M, expect, numIslands)

M = [	["1","1", "0", "0", "0"],
			["1","1", "0", "0", "0"],
			["0","0", "1", "0", "0"],
			["0","0", "0", "1", "0"]]
expect = 3
testNumIslands(M, expect, numIslands)
