const matchArrays = require('./arraysMatch.js');
/*
[
	{
	name: ?string
	input: []
	expected: any 
	}
]
*/
module.exports = (testFunction, testCases) => testCases.forEach(({name, input, expected}, i) => {
	console.log((i+1) + '. ' + (name || ''));

	const actual = testFunction(...input);
	
	const passes = matchArrays(expected, actual);

	if (passes) {
		console.log('PASS with expected result: '+ actual);
		return;
	}
	
	console.log('FAIL:');
	console.log('actual: ', actual);
	console.log('expected: ', expected);
})