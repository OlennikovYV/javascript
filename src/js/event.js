function solve(s) {
    let countChar = s.length,
        countUpperCase = [...s].reduce((acc, el) => acc + (el === el.toUpperCase()), 0);
    return (countChar - countUpperCase < countChar / 2) ?
        s.toUpperCase() :
        s.toLowerCase();
}

console.log(solve("code")); // "code"
console.log(solve("CODe")); // "CODE"
console.log(solve("COde")); // "code"
console.log(solve("Code")); // "code"