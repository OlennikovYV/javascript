function createFunctions(n) {
  const callbacks = [];

  for (let i = 0; i < n; i++) {
    callbacks.push(function () {
      return i;
    });
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
