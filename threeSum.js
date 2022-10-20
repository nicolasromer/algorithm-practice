const l = require('./utils/logUtil.js');
const testRunner = require('./utils/testRunner.js');

// fixme

function threeSumf(arr, target = 0) {
    result = {}

    const hash = arr.reduce((res, num, i) => {
        if (num in res) {
            const existing = Array.isArray(res[num]) ? res[num] : [res[num]];
            res[num] = [...existing, i];
        } else {
            res[num] = i;
        }
        return res;
    }, {})

    console.log('hash: ',hash)

    for (let i = 0; i < arr.length - 2 ; i ++ ) {

        const num = arr[i];
        const subTarget = target - num;
        const subArray = arr.slice(i + 1);
        const matches = twoSum(arr, i, subTarget, hash);
        const keys = Object.keys(matches);

        //console.info(num, subTarget, subArray, matches);

        keys.forEach(k => {
            
            const match = [...matches[k], num].sort((a,b) => a - b);

            result[ match.join(':')] = match;    
        })
        
    }

    return Object.values(result);
}


function twoSum(arr, index, target, hash) {
    console.log(arr,index,target,hash)

    const result = {};

    for (let first = index + 1; first < arr.length; first ++) {

        const num = arr[first];
        const diff = target - num;

        if (
            (
               Array.isArray(hash[diff])
                && hash[diff].filter(i => i > first).length > 0
            )
            ||
            
            (
                diff in hash 
                && hash[diff] > first
            )
           ){
            console.log('why???? ',diff, hash[diff], first)
            console.log(
                        Array.isArray(hash[diff])
                && hash[diff].filter(i => i > first).length === 0
                )


                    const key = num < diff 
                    ?  num + ':' + diff
                    : diff + ':' + num;     

                result[key] = [num, diff];
            
            
        }

        


    }
    
    return result;
}



testRunner(threeSumf, [
    // {
    //     input: [[-1,0,1,2,-1,-4], 0],
    //     expected: [[-1,-1,2],[-1,0,1]]
    // },
    // {
    //     input: [[0,0,0], 0],
    //     expected: [[0,0,0]]
    // },
    {
        input: [[-1,0,1,0], 0],
        expected: [[-1,0,1]]
    }
]);
