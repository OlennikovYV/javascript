//S - 5, O - 0, I - 1
function correct(string) {
	const code = {
		'5': 'S',
		'0': 'O',
		'1': 'I',
	};
	return string.replace(/[501]/g, el => code[el]);
}

console.log(correct("L0ND0N")); // "LONDON"
console.log(correct("DUBL1N")); // "DUBLIN"
console.log(correct("51NGAP0RE")); // "SINGAPORE"
console.log(correct("BUDAPE5T")); // "BUDAPEST"
console.log(correct("PAR15")); // "PARIS"