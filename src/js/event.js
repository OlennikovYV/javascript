function pigIt(str) {
	return str.split(' ')
		.map(el => (/[A-Za-z]/.test(el)) ? el.slice(1) + el.slice(0, 1) + 'ay' : el)
		.join(' ');
}

console.log(pigIt('Pig latin is cool'));//'igPay atinlay siay oolcay'
console.log(pigIt('This is my string'));//'hisTay siay ymay tringsay'