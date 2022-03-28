String.prototype.camelCase = function () {
	return this
		.trim()
		.split(' ')
		.map(el => {
			if (el) {
				return el[0].toUpperCase() + el.slice(1);
			}
			return el;
		})
		.join('');
}

console.log("test case".camelCase()); //  "TestCase"
console.log("camel case method".camelCase()); //  "CamelCaseMethod"
console.log("say hello ".camelCase()); //  "SayHello"
console.log(" camel case word".camelCase()); //  "CamelCaseWord"
console.log("".camelCase()); //  ""