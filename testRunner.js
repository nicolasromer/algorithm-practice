const matchArrays = require('./matchArrays.js');
/*
[
	{
	input: []
	expected: any 
	}
]
*/
const testRunner = (testFunction, testCases) => testCases.forEach((testCase, i) => {
	console.log('Test #' + (i+1) + testCase.name || '');

	const actual = testFunction(...testCase.input);
	
	console.log('actual: ', actual);
	console.log('expected: ', testCase.expected);
	console.log(matchArrays(expected, actual) ? 'PASS' : 'FAIL');
})