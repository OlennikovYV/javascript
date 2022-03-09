function expandedForm(num) {
	return [...num.toString()].reverse()
		.map((el, index) => el * 10 ** index)
		.filter(el => el > 0)
		.reverse()
		.join(' + ');
}

console.log(expandedForm(2)); // '2'
console.log(expandedForm(12)); // '10 + 2'
console.log(expandedForm(42)); // '40 + 2'
console.log(expandedForm(70304)); // '70000 + 300 + 4'