function digital_root(n) {
	while (n.toString().length > 1) {
		n = Array
			.from(String(n), Number)
			.reduce((acc, el) => acc + el, 0);
	}

	return n;
}

console.log(digital_root(16)); //  7
console.log(digital_root(456)); //  6
console.log(digital_root(942)); //  6
console.log(digital_root(132189)); //  6
console.log(digital_root(493193)); //  2