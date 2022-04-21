const arr = N => N ? Array.from(Array(N), (el, i) => i) : [];

console.log(arr(4), [0, 1, 2, 3])
console.log(arr(), [])