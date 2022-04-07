function solution(number) {
	var romane = {
		1: 'I',
		2: 'II',
		3: 'III',
		4: 'IV',
		5: 'V',
		6: 'VI',
		7: 'VII',
		8: 'VIII',
		9: 'IX',
		10: 'X',
		20: 'XX',
		30: 'XXX',
		40: 'XL',
		50: 'L',
		60: 'LX',
		70: 'LXX',
		80: 'LXXX',
		90: 'XC',
		100: 'C',
		200: 'CC',
		300: 'CCC',
		400: 'CD',
		500: 'D',
		600: 'DC',
		700: 'DCC',
		800: 'DCCC',
		900: 'CM',
		1000: 'M',
		2000: 'MM',
		3000: 'MMM',
		4000: 'MMMM',
		5000: 'MMMMM',
		6000: 'MMMMMM',
		7000: 'MMMMMMM',
		8000: 'MMMMMMMM',
		9000: 'MMMMMMMMM'
	};
	let digitArray = [],
		romaneArray = [],
		r = 1;

	digitArray = Array
		.from(String(number))
		.reverse();

	for (let i = 0; i < digitArray.length; i++) {
		digitArray.splice(i, 1, digitArray[i] * r);
		r *= 10;
	}

	for (let i = 0; i < digitArray.length; i++) {
		romaneArray.push(romane[digitArray[i]]);
	}

	return romaneArray.reverse().join('');
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