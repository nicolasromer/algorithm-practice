





const countingSort = arr => {

		const countArrayLength = Math.max(...arr) + 1;
		const countArray = new Array(countArrayLength).fill(null);

		for (let i = 0; i < arr.length; i ++) {			
			countArray[arr[i]] += 1;
		}

		console.log(countArray);
	
	return countArray.reduce((acc, count, index) => {
		let toAdd = count;

		while (toAdd > 0) {
			acc.push(index);
			toAdd --
		}

		return acc;
	}, [])
}

console.log('time complexity: O(n + k) though it can be O(n) when, as in this case, array length is more than value variability')
console.log('space complexity: O(n * 3) three arrays used')


const array = [2,0,2,1,1,0];
console.log(array);
console.log(countingSort(array));
