





const bubbleSort = arr => {

	let sorted = false
	let passCount = 0;

	while (!sorted) {
		sorted = true;
		passCount++;
		
		console.log('pass #' + passCount)

		for (let i = 0; i < arr.length - 1; i ++) {
			

			if (arr[i] > arr[i + 1]) {
				// swap them
				[arr[i], arr[i+1]] = [arr[i+1], arr[i]];

				sorted = false;
			}
		}
	}

	console.log('time complexity — input length: ' + arr.length + ' passes: ' + passCount )
	console.log('complexity: ' + arr.length + '/' + (arr.length * passCount));
	console.log('space complexity — in place = O(n) ' )
	
	return arr
}


const array = [5,7,19,0,22,-1,4];
console.log(array);
console.log(bubbleSort(array));
