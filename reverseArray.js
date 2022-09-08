

/*
 * Complete the 'reverseArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function reverseArray(a) {
    // Write your code here

    // brute force
    let reversed = [];
    a.forEach(item => { reversed = [item, ...reversed]});


    return reversed;
}

function main() {
    const count = 4;
    const arr = [1,4,3,2];

    const result = reverseArray(arr);

    const expected = [2,3,4,1];

    console.log('input: [' + arr + ']');
    console.log('result: [' + result + ']');
    console.log('expected: [' + expected + ']');
    const test = (require("./arraysMatch"))(result, expected); 
    console.log(test ? "pass" : "fail");
}

main()