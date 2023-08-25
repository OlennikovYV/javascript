const last = xs => (xs?.length ? xs.at(-1) : null);

console.log(last([1, 2, 3])); // 3
console.log(last([])); // null
