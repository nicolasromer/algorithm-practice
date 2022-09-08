'use strict';

/*
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function rotateLeft(d, arr) {
    // Write your code here

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
    },
];

function main() {
    runTests(rotateLeft, testCases);
}

main();