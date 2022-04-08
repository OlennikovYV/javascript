function find_average(array) {
	if (!array.length) return 0;
	return array.reduce((acc, el) => acc + el) / array.length;
}

console.log(find_average([1, 1, 1])); //  1
console.log(find_average([1, 2, 3])); //  2
console.log(find_average([1, 2, 3, 4])); //  2.5