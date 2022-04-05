function incrementString(strng) {
	let digit = '',
		digitEnd = strng.match(/\d+$/);

	if (!digitEnd) return strng + '1';

	digit = String(+digitEnd[0] + 1);
	digit = digit.padStart(digitEnd[0].length, '0');

	return strng.slice(0, digitEnd.index) + digit;
}

console.log(incrementString("foobar000")); //  "foobar001"
console.log(incrementString("foo")); //  "foo1"
console.log(incrementString("foobar001")); //  "foobar002"
console.log(incrementString("foobar99")); //  "foobar100"
console.log(incrementString("foobar099")); //  "foobar100"
console.log(incrementString("")); //  "1"