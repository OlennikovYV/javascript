function high(x) {
	let words,
		wordsScores;

	words = x.split(' ');

	wordsScores = words
		.map(word => word
			.split('')
			.reduce((acc, char) => acc + (char.charCodeAt(0) - 96), 0)
		);

	return words[
		wordsScores.indexOf(Math.max(...wordsScores))
	];
}

console.log(high('man i need a taxi up to ubud')); //  'taxi'
console.log(high('what time are we climbing up the volcano')); //  'volcano'
console.log(high('take me to semynak')); //  'semynak'
console.log(high('aa b')); //  'aa'
console.log(high('b aa')); //  'b'
console.log(high('bb d')); //  'bb'
console.log(high('d bb')); //  'd'
console.log(high('aaa b')); //  'aaa'