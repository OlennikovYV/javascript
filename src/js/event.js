function createFunctions(n) {
  const callbacks = [];

  function getIndex(i) {
    return function () {
      return i;
    };
  }

  for (let i = 0; i < n; i++) {
    callbacks.push(getIndex(i));
  }

  return callbacks;
}

const callbacks = createFunctions(5);

for (var i = 0; i < callbacks.length; i++) {
  console.log(callbacks[i]());
  // 0
  // 1
  // 2
  // 3
  // 4
}
