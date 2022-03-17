function solution(roman) {
	let convert = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 },
		romanDigits = Object.keys(convert),
		result = 0;

	for (let i = 0; i < roman.length; ++i) {
		if (romanDigits.indexOf(roman[i]) < romanDigits.indexOf(roman[i + 1])) {
			result -= convert[roman[i]];
		} else {
			result += convert[roman[i]];
		}
	}

	return result;
}

console.log(solution('XXI')); //  21
console.log(solution('I')); //  1
console.log(solution('IV')); //  4
console.log(solution('MMVIII')); //  2008
console.log(solution('MDCLXVI')); //  1666