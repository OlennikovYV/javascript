function calculateYears(principal, interest, tax, desired) {
	let year = 0,
		[P, I, T, D] = [principal, interest, tax, desired];

	while (P < D) {
		P += (P * I) * (1 - T);
		year++;
	}

	return year;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100)); //  3
console.log(calculateYears(1000, 0.01625, 0.18, 1200)); //  14
console.log(calculateYears(1000, 0.05, 0.18, 1000)); //  0