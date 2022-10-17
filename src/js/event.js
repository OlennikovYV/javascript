function splitTheBill(x) {
  let sum = 0;
  let count = 0;
  let aver = 0;

  for (const cost in x) {
    count += 1;
    sum += x[cost];
  }

  aver = sum / count;

  for (const cost in x) {
    let diff = x[cost] - aver;

    if (diff < 0) {
      x[cost] = (x[cost] - aver).toFixed(2);
    } else {
      x[cost] = diff.toFixed(2);
    }

    x[cost] = Number(x[cost]);
  }

  return x;
}

console.log(splitTheBill({ A: 21, B: 15, C: 10 }));
// { A: 5, B: 0, C: -5 }
console.log(splitTheBill({ A: 40, B: 25, X: 10 }));
// { A: 15, B: 0, X: -15 }
