const l = require('./utils/logUtil.js');
const testRunner = require('./utils/testRunner.js');

const miniMaxSum = (arr) => {
     const sorted = arr.sort();   
     const minSum = sorted.slice(0, 4).reduce((sum, num) => sum + num, 0);
     const maxSum = sorted.slice(arr.length-4).reduce((sum, num) => sum + num, 0);

     return [minSum, maxSum];
}

const testCases = [
    {
        input: [ [1,3,5,7,9] ],
        expected: [16,24], 
    },
]

function main() {
    testRunner(miniMaxSum, testCases);
}

main();
