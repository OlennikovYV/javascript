function incrementString(strng) {
	return strng.replace(/[0-8]?9*$/, el => String(++el));
}

console.log(incrementString("foobar000")); //  "foobar001"
console.log(incrementString("foo")); //  "foo1"
console.log(incrementString("foobar001")); //  "foobar002"
console.log(incrementString("foobar99")); //  "foobar100"
console.log(incrementString("foobar099")); //  "foobar100"
console.log(incrementString("")); //  "1"