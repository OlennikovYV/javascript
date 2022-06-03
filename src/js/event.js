function noOdds(values) {
  const result = [];
  for (let i = 0; i < values.length; i += 1)
    if (values[i] % 2 === 0) result.push(values[i]);

  return result;
}

console.log(noOdds([0, 1])); // [0]
console.log(noOdds([0, 1, 2, 3])); // [0, 2]
