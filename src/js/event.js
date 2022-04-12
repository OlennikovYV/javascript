function powersOfTwo(n) {
    return (new Array(n + 1))
        .fill(e => 0)
        .map((e, i) => 2 ** i);
}

console.log(powersOfTwo(0)); //  [1]
console.log(powersOfTwo(1)); //  [1, 2]
console.log(powersOfTwo(4)); //  [1, 2, 4, 8, 16]