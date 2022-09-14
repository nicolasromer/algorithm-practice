const l = require('./utils/logUtil.js');
const testRunner = require('./utils/testRunner.js');

/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

function matchingStrings(strings, queries) {
    const matchHashTable = queries.reduce((hashTable, query) => {
        hashTable[query] = 0;
        return hashTable;
    }, {});

    const matchCount = strings.reduce((matches, string) => {
        if (matches[string] >= 0) {
            matches[string] += 1;
        }
        return matches;
    },matchHashTable)

    const counts = queries.reduce((countsArr, query) => [...countsArr, matchCount[query]], []);

    return counts
}

const testCases = [
    {
        name: 'control',
        input: [
            ['aba', 'baba', 'aba', 'xzxb'],
            ['aba', 'xzxb', 'ab']
        ],
        expected: [2,1,0], 
    }
]

function main() {
    testRunner(matchingStrings, testCases);
}

main();