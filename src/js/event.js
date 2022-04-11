function permutations(string) {
	var combinations = [];

	function permute(array, memo) {
		let currentElement;

		memo = memo || [];

		for (let i = 0; i < array.length; i++) {
			currentElement = array.splice(i, 1);
			if (array.length === 0) {
				let item = memo.concat(currentElement).join('');
				combinations.push(item);
			}
			permute(array.slice(), memo.concat(currentElement));
			array.splice(i, 0, currentElement[0]);
		}

		return combinations;
	}

	permute(string.split(''));

	return [...new Set(combinations)];
}

console.log(permutations('a')); //  ['a']
console.log(permutations('ab').sort()); //  ['ab', 'ba'].sort()
console.log(permutations('aabb').sort()); //  ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort()