const closestMultiple10 = num => {
  return Math.round(num / 10) * 10;
};

for (let i = 10; i <= 14; ++i) {
  console.log(closestMultiple10(i)); // 10
}

for (let i = 15; i <= 20; ++i) {
  console.log(closestMultiple10(i)); // 20
}
