function firstNonRepeatingLetter(s) {
	for (const key in s) {
		if (s.match(new RegExp(s[key], 'gi')).length === 1)
			return s[key];
	}

	return '';
}

console.log(firstNonRepeatingLetter('a')); //  'a'
console.log(firstNonRepeatingLetter('sTress')); //  'T'
console.log(firstNonRepeatingLetter('mOonmen')); //  'e'
console.log(firstNonRepeatingLetter('moccom')); //  'null'