function root(x, n) {
  return Math.pow(x, 1 / n);
}

var rts = [
  { n: 3, x: 8, r: 2 },
  { n: 2, x: 6.25, r: 2.5 },
];

rts.forEach(function (o) {
  console.log(root(o.x, o.n)); // o.r
});
