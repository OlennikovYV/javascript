function xor(a, b) {
    return Boolean(a ^ b);
}

console.log(xor(false, false)); //  false
console.log(xor(true, false)); //  true
console.log(xor(false, true)); //  true
console.log(xor(true, true)); //  false
console.log(xor(true, true)); //  true