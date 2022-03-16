function isPrime(num) {
    const limit = Math.ceil(Math.sqrt(num));
    if (num <= 3) return num > 1;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i <= limit; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

console.log(isPrime(0)); //   false, "0 is not prime"
console.log(isPrime(1)); //   false, "1 is not prime"
console.log(isPrime(2)); //   true, "2 is prime"
console.log(isPrime(73)); //  true, "73 is prime"
console.log(isPrime(75)); //  false, "75 is not prime"
console.log(isPrime(-1)); //  false, "-1 is not prime"
console.log(isPrime(4)); // "4 is not prime"
console.log(isPrime(6)); // "6 is not prime"
console.log(isPrime(8)); // "8 is not prime"
console.log(isPrime(9)); // "9 is not prime"
console.log(isPrime(45)); // "45 is not prime"
console.log(isPrime(-5)); // "-5 is not prime"
console.log(isPrime(-8)); // "-8 is not prime"
console.log(isPrime(-41)); // "-41 is not prime"
console.log(isPrime(2000001)); // "2000001 is not prime"
console.log(isPrime(546419878976874686741867468787)); // "5464198789 is not prime"