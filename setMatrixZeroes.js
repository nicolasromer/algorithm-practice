const l = require('./utils/logUtil.js');
const testRunner = require('./utils/testRunner.js');

 /**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function(matrix) {
    
	const toZero = {
		rows: [],
		cols: []
	}
	console.log(matrix)

	for (let row = 0; row < matrix.length; row ++) {
		for (let col = 0; col < matrix[0].length; col ++) {
			if (matrix[row][col] === 0) {
				toZero.rows = [...toZero.rows, row];
				toZero.cols = [...toZero.cols, col];
			}
		}
	}

	toZero.rows.forEach(r => matrix[r].fill(0));

	for (let row = 0; row < matrix.length; row ++) {
		toZero.cols.forEach(c => (matrix[row][c] = 0));
	}

	return matrix;
};

testRunner(setZeroes, [
{
	input: [[[1,1,1],[1,0,1],[1,1,1]]],
	expected: [[1,0,1],[0,0,0],[1,0,1]],
},{
	input: [[[0,1,2,0],[3,4,5,2],[1,3,1,5]]],
	expected: [[0,0,0,0],[0,4,5,0],[0,3,1,0]],
}

])