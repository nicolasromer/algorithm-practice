const l = require('./utils/logUtil.js');
const testRunner = require('./utils/testRunner.js');

/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

// solution 1: operation tuples, maxes out at a million items

function bigArrayManipulation(n, queries) {
    let maxValue = 0;
    let array = Array(n + 1).fill(0);

    // [0,{start: 100, end: 0}, 0, 0, {end:100, start: 0}, 0, 0]


    queries.forEach(([startRange, endRange, value]) => {
        array[startRange] = array[startRange] || {start: 0, end: 0};
        array[endRange] = array[endRange] || {start: 0, end: 0};
        array[startRange].start += value;
        array[endRange].end += value;
    });

    let currentValue = 0;
    array.forEach(item => {
        if (item) {
            currentValue += item.start;

            l(currentValue);

            if (currentValue > maxValue) {
                maxValue = currentValue;
            }
            currentValue -= item.end;
        }
    })


    return maxValue;
}


const testCases = [
    {
        input: [10, [
            [1,2,100],
            [2,5,100],
            [3,4,100]
        ]],
        expected: 200, 
    },

]

function main() {
    testRunner(bigArrayManipulation, testCases);
}

main();