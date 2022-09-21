const l = require('./utils/logUtil.js');
const testRunner = require('./utils/testRunner.js');


const difference = (a,b) => Math.abs(a-b);
const diagonalDifference = (matrix) => difference(...matrix.reduce((res, arr, i) => {
	
    res[0] += arr[i];
	res[1] += arr[arr.length -1 - i];

	return res;
}, [0,0]));

const testCases = [
    {
        input: [ [
            [1,2,3],
            [2,5,5],
            [3,4,2]
        ]],
        expected: Math.abs(8 - 11), 
    },

]

function main() {
    testRunner(diagonalDifference, testCases);
}

main();
