function deepCount(a) {
	return a.reduce((acc, el) => ++acc + (Array.isArray(el) && deepCount(el)), 0)
}

console.log(deepCount([])); // , 0, "Expected 0"
console.log(deepCount([1, 2, 3])); // , 3, "Expected 3"
console.log(deepCount(["x", "y", ["z"]])); // , 4, "Expected 4"
console.log(deepCount([1, 2, [3, 4, [5]]])); // , 7, "Expected 7"
console.log(deepCount([[[[[[[[[]]]]]]]]])); // , 8, "Expected 8"