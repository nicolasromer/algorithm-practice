

const zigZagSequence = (array) => {
	array.sort((a,b) => a-b);



	const newArr = [];

	const gtHalfIndex = (array.length +1) / 2 -1;
	const lastItemIndex = array.length -1

	for (let i = 0; i < gtHalfIndex; i++){
		newArr.push(array[i]);
		console.log('push ', array[i]);
	}

	for (let i = lastItemIndex; i >= gtHalfIndex; i--){
		newArr.push(array[i])
		console.log('2 push ', array[i]);
	}



	return newArr;
}

const test = () => [{
	input: [1,4,7,8,2,12,6],
}].forEach(({input}) => {
	console.log('in: ',input)
	const result = zigZagSequence(input);

	const gtHalfIndex = (input.length +1) / 2;

	for (let i = 1; i < gtHalfIndex; i++){
		if (result[i] <= result[i-1]) console.log('FAIL on head', result[i]);
	}

	for (let i = (input.length - 2); i >= gtHalfIndex; i--){
		if (result[i] < result[i + 1]) console.log('FAIL on tail', result[i]);
	}

	if (result[gtHalfIndex-1] !== Math.max(...result)) console.log('fail: middle value not max', result);

	console.log('passed, i guess!', result);

});

test();

