const l = require('./utils/logUtil.js');
const testRunner = require('./utils/testRunner.js');

const mirrorIndex = (arrayLength, index) => (
	arrayLength - index - 1
);	


const flippingMatrix = matrix => {

	let total = 0;
	const length = matrix.length;
	let half = length / 2;

	// for each element in the top left subarray, 
	// find the max value of the corresponding positions
	for (let row = 0; row < half; row ++ ) {
		for (let col = 0; col < half; col ++) {
			let max = 0;

			const topLeft  = matrix[row][col];
			const topRight = matrix[row][mirrorIndex(length, col)];
			const botLeft  = matrix[mirrorIndex(length, row)][col]
			const botRight = matrix[mirrorIndex(length, row)][mirrorIndex(length, col)]

			total += Math.max(topLeft, topRight, botLeft, botRight);
		}
	}

	return total;
}

testRunner(mirrorIndex, [{
	input: [4, 1],
	expected: 2
},{
	input: [8, 2],
	expected: 5
}]);

testRunner(flippingMatrix, [
	{
		input: [[
			[1,2,3,4],
			[1,2,3,4],
			[1,2,3,4],
			[1,2,3,4],
		]],
		expected: 14
	}
]);