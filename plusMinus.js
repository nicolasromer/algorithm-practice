const l = require('./utils/logUtil.js');
const testRunner = require('./utils/testRunner.js');

const plusMinus = (arr) => arr.reduce((res, num, i) => {

    const index = (num > 0)
        ? 0
        : (num < 0 ? 1 : 2);
        
    res[index] += 1;

    return res;
}, [0,0,0]).map((count, i) => 
        Number
            .parseFloat((count / arr.length)
            .toFixed(6))
    );

const testCases = [
    {
        input: [ [-4, 3, -9, 0, 4, 1]],
        expected: [0.500000,0.333333,0.166667], 
    },

]

function main() {
    testRunner(plusMinus, testCases);
}

main();
