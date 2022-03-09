function expandedForm(num) {
	return [...num.toString()].reverse()
		.reduce((acc, el, index) => {
			let n = el * 10 ** index;
			if (n > 0) acc.push(n);
			return acc;
		}, [])
		.reverse()
		.reduce((acc, el) => {
			acc += ` + ${el}`;
			return acc;
		}).toString();
}

console.log(expandedForm(2)); // '2'
console.log(expandedForm(12)); // '10 + 2'
console.log(expandedForm(42)); // '40 + 2'
console.log(expandedForm(70304)); // '70000 + 300 + 4'