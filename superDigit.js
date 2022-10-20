const l = require('./utils/logUtil.js');
const testRunner = require('./utils/testRunner.js');

function superDigit(n, k = 1) {
	console.log('stack ', n, ' ', k)
	const num = n;
	if (num < 10) return num;

	const numSum = [...num.toString()].reduce(
		(acc,n) => parseInt(n, 10) + acc
		,0
	);

	const totalSum = numSum * k;
	
	return superDigit(totalSum, 1)
}

const testCases = [
    {
        input: [ 9875, 4 ],
        expected: 8, 
    },    {
        input: [ 9875, 1 ],
        expected: 2, 
    },{
        input: [ 148, 3 ],
        expected: 3, 
    },
]

function main() {
    testRunner(superDigit, testCases);
}

main();