function validBraces(braces) {
	const br = [['(', '{', '['], [')', '}', ']'],];
	const stack = [];
	let i = 0;

	if (br[1].includes(braces[i])) return false;
	stack.push(braces[i++]);

	while (i < braces.length) {
		let index = -1;
		if (br[0].includes(braces[i])) {
			stack.push(braces[i++]);
			continue;
		}
		index = br[1].indexOf(braces[i]);
		if (index === -1) return false;
		if (br[0][index] === stack.pop()) {
			i++;
			continue;
		}
		return false;
	}
	return (stack.length) ? false : true;
}

console.log(validBraces("()))"));// false
console.log(validBraces("()"));// true
console.log(validBraces("[]"));// true
console.log(validBraces("{}"));// true
console.log(validBraces("(){}[]"));// true
console.log(validBraces("([{}])"));// true
console.log(validBraces("(}"));// false
console.log(validBraces("[(])"));// false
console.log(validBraces("({})[({})]"));// true
console.log(validBraces("(})"));// false
console.log(validBraces("(({{[[]]}}))"));// true
console.log(validBraces("{}({})[]"));// true
console.log(validBraces(")(}{]["));// false
console.log(validBraces("())({}}{()][]["));// false
console.log(validBraces("(((({{"));// false
console.log(validBraces("}}]]))}])"));// false