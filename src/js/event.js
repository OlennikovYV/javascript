function once(fn) {
  let executed = false;

  return function (...param) {
    if (!executed) {
      executed = true;
      return fn(...param);
    }
  };
}

let logOnce = once(function (x) {
  return x;
});

console.log(logOnce(1)); // -> 1
console.log(logOnce(2)); // -> no effect
