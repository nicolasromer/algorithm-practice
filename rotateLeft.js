const l = require('./utils/logUtil.js');
const testRunner = require('.utils/testRunner.js');

/*
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function rotateLeft(d, arr) {
    const sliceIndex = d % arr.length;
    const tail = arr.slice(0, sliceIndex);
    const head = arr.slice(sliceIndex, arr.length);


    return [...head, ...tail];
}


const testCases = [
    {
        name: 'rotate 0',
        input: [0, [1,2,3]],
        expected: [1,2,3],
    },{
        name: 'rotate 1 position',
        input: [1, [1,2,3]],
        expected: [2,3,1],
    },{
        name: 'rotate more positions than array length',
        input: [9999, [1,2,3,4,5,6,7]],
        expected: [4,5,6,7,1,2,3],
    },
];

function main() {
    testRunner(rotateLeft, testCases);
}

main();