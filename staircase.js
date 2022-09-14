const l = require('./utils/logUtil.js');
const testRunner = require('./utils/testRunner.js');

const staircase = (n) => Array(n).fill('').map((string, i) => (
        ' '.repeat(n - (i + 1) ) + '#'.repeat(i + 1) 
    ));    

const testCases = [
    {
        input: [ 1 ],
        expected: '#', 
    },{
        input: [ 4 ],
        expected: [
            '   #',
            '  ##',
            ' ###',
            '####',
        ], 
    },
]

function main() {
    testRunner(staircase, testCases);
}

main();
