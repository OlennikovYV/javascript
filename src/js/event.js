function deleteNth(arr, n) {
	let countLst = {};

	return arr.reduce((acc, el) => {
		countLst[el] = (countLst[el] || 0) + 1;
		if (countLst[el] <= n) acc.push(el);
		return acc;
	}, []);
}

console.log(deleteNth([20, 37, 20, 21], 1)); //  [20,37,21]
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); //  [1, 1, 3, 3, 7, 2, 2, 2]