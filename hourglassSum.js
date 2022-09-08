'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
    // Write your code here

    return arr;
}

const arraysMatch = (a1, a2) => JSON.stringify(a1)===JSON.stringify(a2);

function main() {

    const input = [
        [1, 2, 3, 4],
        [4, 4, 4, 1],
        [1, 2, 3, 4],
    ]

    const result = hourglassSum(input);

    const expected = []

    console.log('input: [' + arr + ']');
    console.log('result: [' + result + ']');
    console.log('expected: [' + expected + ']');

    console.log(arraysMatch(result, expected) ? "pass" : "fail");
}

main()
