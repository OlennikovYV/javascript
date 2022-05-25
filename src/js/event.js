function expressionMatter(a, b, c) {
    let sums = [];

    sums.push(a + b + c);
    sums.push(a * b * c);
    sums.push((a + b) * c);
    sums.push(a + b * c);
    sums.push(a * (b + c));
    sums.push(a * b + c);

    return Math.max(...sums);
}

console.log(expressionMatter(2, 1, 2)); //  6
console.log(expressionMatter(2, 1, 1)); //  4
console.log(expressionMatter(1, 1, 1)); //  3
console.log(expressionMatter(1, 2, 3)); //  9
console.log(expressionMatter(1, 3, 1)); //  5
console.log(expressionMatter(2, 2, 2)); //  8