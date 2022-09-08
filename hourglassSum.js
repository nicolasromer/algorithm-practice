const l = require('./logUtils.js');


/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

/* i.e.:
 1,2,3
   4
 4,6,1
 */
const hourglass = {
    height: 3,
    width: 3,
    waist: 1,
}

const l = function() { console.log(...arguments)};

const getValueTuples = (nestedArr) => nestedArr.map(arr => {
    if (arr.length < hourglass.width) throw new Error('no hourglasses');

    const slices = arr.length - (hourglass.width - 1);
    let tuples = [];

    for (let i = 0; i < slices; i ++) {
        let values = arr.slice(i, i + hourglass.width);
        let waistValue = values[1];
        let edgeValue = values.reduce((r, val) => r + val, 0);
        tuples = [...tuples, [edgeValue, waistValue]];
    }

    return tuples; 
})

const getHourglassSums = (tupleSets) => {
    if (tupleSets.length < hourglass.height) throw new Error('no hourglasses');
    
    const scanCount = tupleSets.length - (hourglass.height - 1);

    let hourglassSets = [];

    // slice every set of 3 rows possible 
    for (let i = 0; i < scanCount; i ++) {
        const set = tupleSets.slice(i, i + hourglass.height);
        console.log('Hourglasses: ', set); 
        hourglassSets = [...hourglassSets, set];
    }

    // combine hourglass sets
    const hourglassSet = hourglassSets.reduce((result, set, i) => {
        set.forEach((row, i) => {
            result[i] = [
                ...(result[i] || []),
                ...row
            ];
        });
        return result;
    }, []);

    console.log('HourglassSet: ', hourglassSet);

    // sum the hourglass sets
    const sums = hourglassSet.reduce((result, row, i) => {
        
        const isWaist = i === 1;

        row.forEach((tuple, i) => {
            const value = tuple[ isWaist ? 1 : 0];
            result[i] = (result[i] || 0) + value;
        })

        return result;
    }, [])

    console.log('sums: ', sums);

    return sums;
}

function hourglassSum(arr) {
    // Write your code here

    // per position get all possible values
    // [edgeValue, waistValue]
    //[1, 2, 3, 4] => [[6, 2], [9, 3]]
    const valueTuples = getValueTuples(arr);
    console.log('Tuples: ', valueTuples);

    return getHourglassSums(valueTuples);
}

function main() {

    const input = [
        [0, 3, 0, 4, 0],
        [4, 4, 4, 1, 0],
        [1, 2, 3, 4, 0],
        [1, 2, 3, 4, 0],
    ]

    const result = hourglassSum(input);

    const expected = [ 13, 20, 12, 20, 21, 16 ];

    console.log('\n\nTest Results\n');

    console.log('input: ', input);
    console.log('result: ', result);
    console.log('expected: [' + expected + ']');

    const test = require('./arraysMatch.js')(result, expected);
    console.log(test ? "pass" : "fail");
    return;
}

main();
return;



