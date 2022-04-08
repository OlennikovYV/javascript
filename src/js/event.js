function find_average(array) {
	const sum = array.reduce((acc, el) => acc + el);
	const length = array.length;

	return length === 0 ? 0 : sum / length;
}

console.log(find_average([1, 1, 1])); //  1
console.log(find_average([1, 2, 3])); //  2
console.log(find_average([1, 2, 3, 4])); //  2.5