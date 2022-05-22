function reverseLetter(str) {
    return str.replace(/[^a-z]/g, '')
        .split('')
        .reverse()
        .join('');
}

console.log(reverseLetter("krishan")); // "nahsirk"
console.log(reverseLetter("ultr53o?n")); // "nortlu"
console.log(reverseLetter("ab23c")); // "cba"
console.log(reverseLetter("krish21an")); // "nahsirk"
console.log(reverseLetter("psj#dvbupoifdcvew)dnxqn,fkbrh!nofc5_fai/x")); // "xiafcfonhrbkfnqxndwevcdfiopubvdjsp"