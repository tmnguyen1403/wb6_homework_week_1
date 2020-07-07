
const Test = require('./Test')

function connectLand(M, row, col) {
		const LAND = "1"

		if (M[row - 1] && M[row - 1][col] === LAND) {
			M[row - 1][col] = M[row][col]
			connectLand(M, row - 1, col)
		}
		if (M[row][col - 1] === LAND) {
			M[row][col - 1] = M[row][col]
			connectLand(M, row, col - 1)
		}
		if (M[row + 1] && M[row + 1][col] === LAND) {
			M[row + 1][col] = M[row][col]
			connectLand(M, row + 1, col)
		}
		if (M[row][col + 1] === LAND) {
			M[row][col + 1] = M[row][col]
			connectLand(M, row, col + 1)
		}

		//VERSION 1
		// let directions = [[-1, 0], [0, -1], [1, 0], [0, 1]] //top, left, bottom, right
		// for (let [x, y] of directions) {
		// 	let r = row + x
		// 	let c = col + y
		// 	if (M[r] && M[r][c] === LAND) {
		// 		M[r][c] = M[row][col]
		// 		connectLand(M, r, c)
		// 	}
		// }
}

//using the same Map array to mark connected island
//start the first island at 11
const numIslands = (M) => {
	const LAND = "1"
	if (M.length === 0 || M[0].length === 0)
		return 0
	let max_row = M.length
	let max_col = M[0].length
	let nb_islands = 10
	for (let row = 0; row < max_row; ++row) {
		for (let col = 0; col < max_col; ++col) {
			//a new island appears
			if (M[row][col] === LAND) {
				nb_islands += 1
				M[row][col] = nb_islands
					//expand to adjacent nodes
				connectLand(M, row, col)
			}
		}
	}
	return nb_islands - 10
}

function testNumIslands(M, expect, f) {
	console.log("Test:")
	Test.print2DArray(M)
	let result = f(M)

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
