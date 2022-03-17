function solution(roman) {
	let convert = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
	return roman.split('').map(el => convert[el]).reduce((acc, el, index, arr) => acc + ((arr[index + 1] > el) ? -el : el), 0);
}

console.log(solution('XXI')); //  21
console.log(solution('I')); //  1
console.log(solution('IV')); //  4
console.log(solution('MMVIII')); //  2008
console.log(solution('MDCLXVI')); //  1666