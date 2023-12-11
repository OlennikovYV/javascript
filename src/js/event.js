function collatz(n) {
  let numberCollatz = n;
  let lengthCollatzConjecture = 1;

  while (numberCollatz > 1) {
    lengthCollatzConjecture++;

    numberCollatz =
      numberCollatz % 2 ? numberCollatz * 3 + 1 : numberCollatz / 2;
  }

  return lengthCollatzConjecture;
}

console.log(collatz(20)); // 8
console.log(collatz(15)); // 18
