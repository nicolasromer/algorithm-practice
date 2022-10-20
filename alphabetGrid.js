






function columnsAreInOrder(grid) {

	const sortedGrid = grid.map(g => [...g].sort());
	
	console.log(sortedGrid);

	const rotatedGrid = [];
	for (let col = 0; col < sortedGrid.length; col ++) {
		for (let row = 0; row < sortedGrid.length; row ++) {
			if (row === 0) continue;
			if (sortedGrid[row][col] < sortedGrid[row -1][col]) {
				return 'NO'
			}
		}
	}

	return 'YES'
}



[
	{
		input: ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv'],
		expected: 'YES'
	},	{
		input: ['beacd', 'gfhij', 'lomkn', 'trpqs', 'xywuv'],
		expected: 'YES'
	},{
		input: ['gzd', 'bqq', 'zzz'],
		expected: 'NO'
	}
].forEach(({input, expected}) => {
	const actual = columnsAreInOrder(input);
	const pass = actual === expected;
	pass
		? console.log('PASS')
		: console.log("FAIL - expected: " + expected + " actual:" + actual);
})