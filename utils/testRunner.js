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

	const matchArrays = (a1, a2) => JSON.stringify(a1) === JSON.stringify(a2);

	const actual = testFunction(...input);
	const passes = matchArrays(expected, actual);

	if (passes) {
		console.log('PASS with expected result: '+ actual);
		return;
	}
	
	console.log('FAIL! actual: ', actual, 'expected: ', expected);
})

const test = (func, cases) => cases.forEach(({input, expected}) => {
	const matchArrays = (a,b) => JSON.stringify(a) === JSON.stringify(b);
	const actual = func(...input);
	const passes = matchArrays(actual, expected);
	passes
		? console.log('PASS')
		: console.log('FAIL! actual:', actual, ' expected: ',expected)
})
