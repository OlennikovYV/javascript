var maxSequence = function (arr) {
	let sum = 0;

	return arr.reduce((acc, el) => {
		sum = Math.max(sum + el, 0);
		return Math.max(acc, sum)
	}, 0);
}

console.log(maxSequence([]));// 0
console.log(maxSequence([-1, -2, -3]));// 0
console.log(maxSequence([-1, 2, -1, 4, -3]));// 5
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));// 6
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 20]));// 21