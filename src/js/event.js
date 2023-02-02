const prevMultOfThree = n => {
  let num = n;

  while (num % 3 !== 0) {
    num = Math.floor(num / 10);
    if (num < 1) return null;
  }

  return num;
};

const answer = [null, null, 36, 12, 9];
[1, 25, 36, 1244, 952406].forEach((q, i) =>
  console.log(prevMultOfThree(q) + ' = ' + answer[i])
);
