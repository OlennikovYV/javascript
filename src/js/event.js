var isPP = function (n) {
	for (let i = 2; i * i <= n; i++) {
		let power = Math.round(Math.log(n) / Math.log(i));
		if (Math.pow(i, power) === n) return [i, power];
	}
	return null;
}

console.log(isPP(4));//2, 2
console.log(isPP(16));//2, 4
console.log(isPP(36));//6, 2
console.log(isPP(100));//10, 2
console.log(isPP(125));//5, 3
console.log(isPP(6561));//3, 8