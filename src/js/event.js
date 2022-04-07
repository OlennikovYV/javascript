function solution(number) {
	let roman = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1
	},
		result = '';

	while (number > 0)
		for (let key in roman) {
			if (roman[key] <= number) {
				result += key;
				number -= roman[key];
				break;
			}
		}

	return result;
}

console.log(solution(1)); //  'I', '1 should, "I"'
console.log(solution(2)); //  'II', '2 should, "II"'
console.log(solution(3)); //  'III', '3 should, "III"'
console.log(solution(4)); //  'IV', '4 should, "IV"'
console.log(solution(5)); //  'V', '5 should, "V"'
console.log(solution(9)); //  'IX', '9 should, "IX"'
console.log(solution(10)); //  'X', '10 should, "X"'
console.log(solution(11)); //  'XI'
console.log(solution(19)); //  'XIX'
console.log(solution(22)); //  'XXII'
console.log(solution(15)); //  'XV'