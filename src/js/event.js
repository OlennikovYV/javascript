const makeChange = amount => {
  const minimumCoins = {};
  const amounts = { H: 50, Q: 25, D: 10, N: 5, P: 1 };

  for (let key in amounts) {
    const count = Math.floor(amount / amounts[key]);
    if (count > 0) minimumCoins[key] = count;
    amount -= count * amounts[key];
  }

  return minimumCoins;
};

const solutions = {
  43: { Q: 1, D: 1, N: 1, P: 3 },
  91: { H: 1, Q: 1, D: 1, N: 1, P: 1 },
};

for (const key in solutions) {
  const answer = makeChange(key);
  for (const a in answer)
    console.log(`${a} `, answer[a], '<=>', solutions[key][a]);
  for (const b in solutions[key])
    console.log(`${b} `, answer[b], '<=>', solutions[key][b]);
}
