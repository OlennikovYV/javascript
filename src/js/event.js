function sharedBits(a, b) {
  return (a & b).toString(2).replace(/0/g, '').length > 1;
}

const TESTS = [
  [1, 2],
  [16, 8],
  [1, 1],
  [2, 3],
  [7, 10],
  [43, 77],
  [7, 15],
  [23, 7],
];

TESTS.forEach(([a, b]) =>
  console.log(`a=${a} and b=${b} equal ${sharedBits(a, b)}`)
);
