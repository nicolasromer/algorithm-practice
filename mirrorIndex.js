




const mirrorIndex = (arrayLength, index) => arrayLength - index -1;

/*
{
	input: any[]
	assert: array|int
}
*/
const test = (func, cases) => cases.forEach(({input, assert}) => (
	JSON.stringify(func(...input)) === JSON.stringify(assert) 
		? console.log('PASS: ', assert)
		: console.log('FAIL — actual: ', func(...input), ' expected: ', assert)
))

test(mirrorIndex, [
	{
		input: [6, 0],
		assert: 5,
	}, {
		input: [4, 1],
		assert: 2
	}
]);







