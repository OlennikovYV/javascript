function collatz(n) {
  let numberCollatz = n;
  let lengthCollatzConjecture = 1;

  while (numberCollatz > 1) {
    if (numberCollatz % 2 === 0) {
      numberCollatz /= 2;
    } else {
      numberCollatz *= 3;
      numberCollatz += 1;
    }

    lengthCollatzConjecture++;
  }

  return lengthCollatzConjecture;
}

console.log(collatz(20)); // 8
console.log(collatz(15)); // 18
