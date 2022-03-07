function divisors(integer) {
    let arrDivisors = [];

    for (let i = 2; i < integer; i++) {
        if (integer % i === 0) arrDivisors.push(i);
    }

    return arrDivisors.length ? arrDivisors : `${integer} is prime`;
};

console.log(divisors(15)); // [3, 5]
console.log(divisors(12)); // [2, 3, 4, 6]
console.log(divisors(13)); // "13 is prime"