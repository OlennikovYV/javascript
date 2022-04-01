function digital_root(n) {
	if (n.toString().length === 1) return n;

	return digital_root(
		Array
			.from(String(n), Number)
			.reduce((acc, el) => acc + el, 0)
	)
}

console.log(digital_root(16)); //  7
console.log(digital_root(456)); //  6
console.log(digital_root(942)); //  6
console.log(digital_root(132189)); //  6
console.log(digital_root(493193)); //  2