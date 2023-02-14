function spread(func, args) {
  return func.call(null, ...args);
}

console.log(
  spread(
    function (x, y) {
      return x + y;
    },
    [1, 2]
  )
);
//  3
// Equivalent: (function(x,y){return x+y})(1,2)
