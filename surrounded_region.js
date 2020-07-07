/*
**Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.
**
**A region is captured by flipping all 'O's into 'X's in that surrounded region.
**
**Example:
**
**X X X X
**X O O X
**X X O X
**X O X X
**After running your function, the board should be:
**
**X X X X
**X X X X
**X X X X
**X O X X
**Explanation:
**
**Surrounded regions shouldn’t be on the border, which means that any
**'O' on the border of the board are not flipped to 'X'.
**Any 'O' that is not on the border and it is not connected to an 'O'
**on the border will be flipped to 'X'. Two cells are connected
**if they are adjacent cells connected horizontally or vertically.
*/
const Test = require("./Test")

const DIRECTIONS = [[-1, 0], [0, -1], [1, 0], [0, 1]]
const NOT_CAPTURED = "O"
const CAPTURE = "X"
const SEARCH = "S"

function searchO(board, row, col) {
	//out of board or 'X'
	if (board[row] === undefined
			|| board[row][col] === undefined
			|| board[row][col] === CAPTURE)
		return
	//recursively search through adjacent nodes
	if (board[row][col] === NOT_CAPTURED) {
		board[row][col] = SEARCH
		for (let [x, y] of DIRECTIONS) {
			searchO(board, row + x, col + y)
		}
	}
}

function solve(board) {
	//notice that uncaptured regions need to have at least one 0-border
	//Therefore, we can use 0-border as a base to expand our search
	//Free nodes are connected with 0-border
	if (board.length === 0)
		return board
	let max_row = board.length
	let max_col = board[0].length
	let row = 0
	let col = 0
	for (; col < max_col; ++col) {
		if (board[row][col] === NOT_CAPTURED) {
			searchO(board, row, col)
		}
		if (board[max_row - 1][col] === NOT_CAPTURED) {
			searchO(board, max_row - 1, col)
		}
	}
	col = 0
	for (row = 0; row < max_row; ++row) {
		if (board[row][col] === NOT_CAPTURED) {
			searchO(board, row, col)
		}
		if (board[row][max_col - 1] === NOT_CAPTURED) {
			searchO(board, row, max_col - 1)
		}
	}
	for (row = 0; row < max_row; ++ row) {
		for (col = 0; col < max_col; ++ col) {
			if (board[row][col] === NOT_CAPTURED) {
				board[row][col] = CAPTURE
			}
			if (board[row][col] === SEARCH) {
				board[row][col] = NOT_CAPTURED
			}
		}
	}
}

function testSolve(board, expect, f) {
	console.log("Test:")
	Test.print2DArray(board)
	f(board)
	console.log(`Expect:`)
	Test.print2DArray(expect)
	console.log(`Result:`)
	Test.print2DArray(board)
	console.log("Correct result? ", Test.compare2DArray(expect, board))
	console.assert(Test.compare2DArray(expect, board))
}

console.log("Test testSolve")
let board = []
let expect = []
board = [["X","X","X","X"],
						 ["X","O","O","X"],
						 ["X","X","O","X"],
						 ["X","O","X","X"]]
expect = [["X","X","X","X"],
							["X","X","X","X"],
							["X","X","X","X"],
							["X","O","X","X"]]
testSolve(board, expect, solve)

board = [["O","X","O"],["X","O","X"],["O","X","O"]]
expect = [["O","X","O"],["X","X","X"],["O","X","O"]]
testSolve(board, expect, solve)

board = [["O","O"],["O","O"]]
expect = [["O","O"],["O","O"]]
testSolve(board, expect, solve)

board = [	["O","X","X","O","X"],
					["X","O","O","X","O"],
					["X","O","X","O","X"],
					["O","X","O","O","O"],
					["X","X","O","X","O"]]
expect = [["O","X","X","O","X"],
					["X","X","X","X","O"],
					["X","X","X","O","X"],
					["O","X","O","O","O"],
					["X","X","O","X","O"]]
testSolve(board, expect, solve)

board = [	["O","O","O","O","X","X"],
					["O","O","O","O","O","O"],
					["O","X","O","X","O","O"],
					["O","X","O","O","X","O"],
					["O","X","O","X","O","O"],
					["O","X","O","O","O","O"]]
expect = [["O","O","O","O","X","X"],
					["O","O","O","O","O","O"],
					["O","X","O","X","O","O"],
					["O","X","O","O","X","O"],
					["O","X","O","X","O","O"],
					["O","X","O","O","O","O"]]
testSolve(board, expect, solve)
