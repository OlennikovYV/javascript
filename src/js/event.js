function digital_root(n) {
	return (n - 1) % 9 + 1;
}

console.log(digital_root(16)); //  7
console.log(digital_root(456)); //  6
console.log(digital_root(942)); //  6
console.log(digital_root(132189)); //  6
console.log(digital_root(493193)); //  2