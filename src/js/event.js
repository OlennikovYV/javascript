var isPP = function (n) {
	for (let i = 2; i * i <= n; i++)
		for (let j = 2; Math.pow(i, j) <= n; j++) {
			if (Math.pow(i, j) === n) return [i, j];
		}
	return null;
}

console.log(isPP(4));//2, 2
console.log(isPP(16));//2, 4
console.log(isPP(36));//6, 2
console.log(isPP(100));//10, 2
console.log(isPP(125));//5, 3