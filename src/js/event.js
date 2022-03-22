function remainder(n, m) {
	if (n < m) [n, m] = [m, n];
	if (!m) return NaN;
	return n % m;
}

console.table(remainder(17, 5)); // 2
console.table(remainder(13, 72)); // 7
console.table(remainder(0, -1)); // 0
console.table(remainder(0, 1)); // NaN
console.table(remainder(0, 0)); // NaN