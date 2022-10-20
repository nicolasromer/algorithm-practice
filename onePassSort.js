





const countingSort = arr => {

		const countArrayLength = Math.max(...arr) + 1;
		const result = new Array(countArrayLength).fill(null);

		for (let i = 0; i < arr.length; i ++) {			
			result[arr[i]] += 1;
		}
		console.log(result);
	
	return result.reduce((acc, count, index) => {
		let toAdd = count;

		while (toAdd > 0) {
			acc.push(index);
			toAdd --
		}

		return acc;
	}, [])

	

	
}


const array = [2,0,2,1,1,0];
console.log(array);
console.log(countingSort(array));
