function totalBill(str) {
  let currentCount = 0;

  return (
    2 *
    str.split('').reduce((count, el) => {
      if (el === ' ') return count;

      currentCount++;

      if (currentCount === 5) {
        currentCount = 0;
        return count;
      }

      return count + 1;
    }, 0)
  );
}

console.log(totalBill('rr')); // 4
console.log(totalBill('rr rrr')); // 8
console.log(totalBill('rr rrr rrr rr')); // 16
console.log(totalBill('rrrrrrrrrrrrrrrrrr   rr r')); //34
console.log(totalBill('')); // 0
