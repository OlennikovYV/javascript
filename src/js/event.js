function digitize(n) {
    return Array.from(String(n), Number);
}

console.log(digitize(35231)); // [1,3,2,5,3]
console.log(digitize(0)); // [0]