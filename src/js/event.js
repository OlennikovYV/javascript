function factorial(n) {
    let fact = 1;

    if (n < 0 || n > 12)
        throw RangeError('RangeError');

    while (n >= 1) {
        fact *= n--;
    }

    return fact;
}

console.log(factorial(0)); //  1, "factorial for 0 is 1"
console.log(factorial(1)); //  1, "factorial for 1 is 1"
console.log(factorial(2)); //  2, "factorial for 2 is 2"
console.log(factorial(3)); //  6, "factorial for 3 is 6"