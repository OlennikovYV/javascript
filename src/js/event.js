function mormons(startingNumber, reach, target) {
  let mission = 0;

  while (startingNumber < target) {
    startingNumber += startingNumber * reach;
    mission++;
  }

  return mission;
}

const tests = [
  [[10, 3, 9], 0],
  [[40, 2, 120], 1],
  [[40, 2, 121], 2],
  [[20000, 2, 7000000000], 12],
];

// debugger;

for (const [input, expected] of tests) {
  const result = mormons(...input);
  console.log(`mormons([${input}], ${expected}) = ${result === expected}`);
}
