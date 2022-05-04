function sumTriangularNumbers(n) {
    let sum = 0;

    if (n < 0) return 0;

    for (let i = 0; i <= n; i++) {
        sum += i / 2 * (i + 1);
    }

    return sum;
}

console.log(sumTriangularNumbers(6)); //  56
console.log(sumTriangularNumbers(34)); //  7140
console.log(sumTriangularNumbers(-291)); //  0
console.log(sumTriangularNumbers(943)); //  140205240
console.log(sumTriangularNumbers(-971)); //  0