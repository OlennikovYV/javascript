const items = [];

items.push({ a: 'b', c: 'd' });

console.log(items.length !== 0); // true
console.log(items.length); // 1
console.dir(JSON.stringify(items)); // [{ a: 'b', c: 'd' }]
