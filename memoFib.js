const l = require('./utils/logUtil.js');
const testRunner = require('./utils/testRunner.js');


const memoFib = () => {
     const memo = {};

     return function fib(n) {
        const memoized = memo[n];
        if (memoized) {
            return memoized
        };    
        if (n <= 0 ) return 0;
        if (n === 1) return 1;


        const value = fib(n - 1) + fib(n - 2);
        
        memo[n] = value;
        
        return value;
     };
}

const testCases = [
    {
        input: [ 3 ],
        expected: 2, 
    },    {
        input: [ 4 ],
        expected: 3, 
    },    {
        input: [ 5 ],
        expected: 5, 
    },
        {
        input: [ 6 ],
        expected: 8, 
    },    {
        input: [ 19 ],
        expected: 4181, 
    },
    {
        input: [ 78 ],
        expected: 8944394323791464, 
    },
    // todo deal with bigInts
]

function main() {
    testRunner(memoFib(), testCases);
}

main();
