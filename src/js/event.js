function firstNonRepeatingLetter(s) {
	const countChars = {};

	s.split('').map(el => {
		const char = el.toLowerCase();
		countChars[char] = (countChars[char] || 0) + 1;
	});
	for (let key in countChars)
		if (countChars[key] === 1)
			return s[s.toLowerCase().indexOf(key)];

	return '';
}

console.log(firstNonRepeatingLetter('a')); //  'a'
console.log(firstNonRepeatingLetter('sTress')); //  'T'
console.log(firstNonRepeatingLetter('mOonmen')); //  'e'
console.log(firstNonRepeatingLetter('moccom')); //  'null'