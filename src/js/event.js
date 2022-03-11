var lastDigit = function (str1, str2) {
	function lastDigitNumber(num) {
		return BigInt(num.toString().slice(-1));
	}

	function binPow(x, pow) {
		let res = 1n;

		while (pow) {
			if (pow % 2n === 1n) {
				res *= x;
				res = lastDigitNumber(res);
				--pow;
				continue;
			}
			x *= x;
			x = lastDigitNumber(x);
			pow >>= 1n;
		}

		return res;
	}

	return Number(binPow(BigInt(str1), BigInt(str2)));
}

console.log(lastDigit("4", "1"));// 4
console.log(lastDigit("4", "2"));// 6
console.log(lastDigit("9", "7"));// 9
console.log(lastDigit("10", "10000000000"));// 0
console.log(lastDigit("1606938044258990275541962092341162602522202993782792835301376", "2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376"));// 6
console.log(lastDigit("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651"));// 7