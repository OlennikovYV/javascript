var maxSequence = function (arr) {
	let maxSum = 0;

	function chechNegativeNumber(arr) {
		return arr.filter(el => el > 0).length === 0;
	}

	if (arr.length === 0) return 0;
	if (chechNegativeNumber(arr)) return 0;

	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i; j < arr.length + 2; j++) {
			const sum = arr.slice(i, j + 2).reduce((acc, el) => acc + el, 0);
			if (sum > maxSum) maxSum = sum;
		}
	}

	return maxSum;
}

console.log(maxSequence([]));// 0
console.log(maxSequence([-1, -2, -3]));// 0
console.log(maxSequence([-1, 2, -1, 4, -3]));// 5
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));// 6
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 20]));// 21
console.log([-1, 2, -1, 4, -3].slice(0, 0));