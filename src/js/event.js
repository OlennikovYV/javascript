function well(x) {
  const goodCount = x.filter(idea => idea === 'good').length;

  if (goodCount < 1) return 'Fail!';
  if (goodCount < 3) return 'Publish!';

  return 'I smell a series!';
}

console.log(well(['bad', 'bad', 'bad'])); // 'Fail!'
console.log(well(['good', 'bad', 'bad', 'bad', 'bad'])); // 'Publish!'
console.log(
  well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])
);
// 'I smell a series!'
