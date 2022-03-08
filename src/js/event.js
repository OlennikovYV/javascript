function narcissistic(value) {
    return value.toString()
        .split('')
        .map((el, index, arr) => el ** (arr.length))
        .reduce((acc, el) => acc + el, 0) === value;
}

console.log(narcissistic(7)); // true
console.log(narcissistic(153)); // true
console.log(narcissistic(371)); // true
console.log(narcissistic(1652)); // false