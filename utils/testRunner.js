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
	console.log('Test #' + (i+1) + ' ' + (name || ''));

	const actual = testFunction(...input);
	
	console.log('input: ', input);
	console.log('actual: ', actual);
	console.log('expected: ', expected);
	console.log(matchArrays(expected, actual) ? 'PASS' : 'FAIL');
})