function DNAStrand(dna) {
    const dnaDecode = {
        A: 'T',
        C: 'G',
        T: 'A',
        G: 'C',
    };

    return dna
        .split('')
        .map(el => dnaDecode[el])
        .join('');
}

console.log(DNAStrand("AAAA")); // "TTTT","String AAAA is"
console.log(DNAStrand("ATTGC")); // "TAACG","String ATTGC is"
console.log(DNAStrand("GTAT")); // "CATA","String GTAT is"