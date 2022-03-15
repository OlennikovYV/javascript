function firstNonConsecutive(arr) {
	let array = [],
		diff = 0,
		result;

	if (arr.length < 2) return null;

	for (let i = 1; i < arr.length; i++) {
		array.push(arr[i] - arr[i - 1]);
	}

	diff = Math.max(...array);
	result = array.indexOf(diff);
	array.sort();
	if (array[0] === array[array.length - 1]) return null;

	return (result === -1) ? null : arr[result + 1];
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])); //6
console.log(firstNonConsecutive([1, 2, 3, 4, 5, 6, 7])); //null
console.log(firstNonConsecutive([6, 8, 9, 10, 11, 12, 14])); //8