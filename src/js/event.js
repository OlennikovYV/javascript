function digPow(n, p) {
	let result = [...n.toString()].reduce((acc, el) => {
		acc += el ** p;
		p++;
		return acc;
	}, 0);

	return (result % n) ? -1 : result / n;
}

console.log(digPow(89, 1));// 1
console.log(digPow(92, 1));// -1
console.log(digPow(46288, 3));// 51