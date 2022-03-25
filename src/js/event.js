function abbrevName(name) {
	return name.toUpperCase()
		.split(' ')
		.map(e => e[0])
		.join('.');
}

console.log(abbrevName("Sam Harris")); //  "S.H"
console.log(abbrevName("Patrick Feenan")); //  "P.F"
console.log(abbrevName("Evan Cole")); //  "E.C"
console.log(abbrevName("P Favuzzi")); //  "P.F"
console.log(abbrevName("David Mendieta")); //  "D.M"