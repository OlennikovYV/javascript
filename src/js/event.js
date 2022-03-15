function firstNonConsecutive(arr) {
	let result = arr.find((el, index) => el != index + arr[0]);

	return (Number.isInteger(result)) ? result : null;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])); //6
console.log(firstNonConsecutive([1, 2, 3, 4, 5, 6, 7])); //null
console.log(firstNonConsecutive([6, 8, 9, 10, 11, 12, 14])); //8