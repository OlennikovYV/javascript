function reverse(n) {
  let reverseNumber = 0;

  while (n) {
    reverseNumber = reverseNumber * 10 + (n % 10);
    n = Math.floor(n / 10);
  }

  return reverseNumber;
}

console.log(reverse(1234)); // 4321
console.log(reverse(10987)); // 78901
console.log(reverse(1020)); // 201
