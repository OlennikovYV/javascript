function cookie(x) {
  const zach = 'Who ate the last cookie? It was Zach!';
  const monica = 'Who ate the last cookie? It was Monica!';
  const dog = 'Who ate the last cookie? It was the dog!';

  if (typeof x === 'string') return zach;
  if (typeof x === 'number') return monica;
  return dog;
}

console.log(cookie('Ryan')); // Who ate the last cookie? It was Zach!
console.log(cookie(26)); // Who ate the last cookie? It was Monica!
console.log(cookie(2.3)); // Who ate the last cookie? It was Monica!
console.log(cookie(true)); // Who ate the last cookie? It was the dog!
