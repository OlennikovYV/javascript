function arrayDepth(array) {
	function flat(arr) {
		return arr.reduce((acc, el) => acc.concat(el), []);
	}

	if (array.filter(el => Array.isArray(el)).length != 0) {
		return arrayDepth(flat(array)) + 1;
	}

	return 1;
}

console.log(arrayDepth([true])); //  // returns 1
console.log(arrayDepth([])); //  // returns 1
console.log(arrayDepth([2, "yes", [true, false]])); //  // returns 2
console.log(arrayDepth([1, [2, [3, [4, [5, [6], 5], 4], 3], 2], 1])); //  // returns 6
console.log(arrayDepth([2.0, [2, 0], 3.7, [3, 7], 6.7, [6, 7]])); //  // returns 2