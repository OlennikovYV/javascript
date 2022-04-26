function between(a, b) {
    return Array.from(Array(b - a + 1), (el, index) => el = index + a)
}

console.log(between(1, 4)); //  [1, 2, 3, 4])
console.log(between(-2, 2)); //  [-2, -1, 0, 1, 2])