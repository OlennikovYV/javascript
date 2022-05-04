function sumTriangularNumbers(n) {
    return n > 0 ? n * (n + 1) * (n + 2) / 6 : 0;
}

console.log(sumTriangularNumbers(6)); //  56
console.log(sumTriangularNumbers(34)); //  7140
console.log(sumTriangularNumbers(-291)); //  0
console.log(sumTriangularNumbers(943)); //  140205240
console.log(sumTriangularNumbers(-971)); //  0