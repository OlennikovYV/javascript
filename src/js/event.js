function DNAtoRNA(dna) {
    return dna.split('').map(dnaElement => {
        return (dnaElement == 'T' ? 'U' : dnaElement);
    }).join('');
}

console.log(DNAtoRNA('TTTT'));
console.log(DNAtoRNA('GCAT'));
console.log(DNAtoRNA('GACCGCCGCC'));