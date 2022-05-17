function sumDigits(number) {
    return String(Math.abs(number))
        .split('')
        .reduce((sum, str) => sum + Number(str), 0);
}

console.log(sumDigits(10)); //  1
console.log(sumDigits(99)); //  18
console.log(sumDigits(-32)); //  5