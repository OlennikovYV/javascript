function makeNegative(num) {
    return (Math.sign(num) == 1) ? -num : num
}

console.log(makeNegative(0));
console.log(makeNegative(5));
console.log(makeNegative(-5));
console.log(makeNegative(10));