function countPositivesSumNegatives(input) {
	if (input === null) return [];
	return (!input.length && []) || input.reduce((acc, el) => {
		if (!el) return acc;
		if (el > 0) { acc[0] += 1; return acc; }
		if (el < 0) { acc[1] += el; return acc; }
	}, [0, 0]);
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));// [10, -65]
console.log(countPositivesSumNegatives([]));// []
console.log(countPositivesSumNegatives(null));// []