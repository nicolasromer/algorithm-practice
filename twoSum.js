const l = require('./utils/logUtil.js');
const testRunner = require('./utils/testRunner.js');

function twoSum(arr, target) {
    
    const hash = {};
    arr.forEach((num, i) => {
        hash[num] = i
    });

    console.log(hash)

    for (let i = 0; i < arr.length; i ++) {
        console.log(target - arr[i]);

        if (  target - arr[i]  in hash) {
            return [ i, hash[ target - arr[i] ]];
        }
    }
    

}




testRunner(twoSum, [
    {
        input: [[4,1,2,3], 3],
        expected: [1,2]
    },{
        input: [[10,2,3,1,4,6], 9],
        expected: [2, 5]
    }
]);
