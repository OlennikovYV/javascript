function well(x) {
  const goodCount = x.reduce((sumGood, idea) => {
    if (idea === 'good') sumGood += 1;

    return sumGood;
  }, 0);

  if (goodCount === 1 || goodCount == 2) return 'Publish!';
  if (goodCount > 2) return 'I smell a series!';

  return 'Fail!';
}

console.log(well(['bad', 'bad', 'bad'])); // 'Fail!'
console.log(well(['good', 'bad', 'bad', 'bad', 'bad'])); // 'Publish!'
console.log(
  well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])
);
// 'I smell a series!'
