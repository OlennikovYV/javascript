const paintLetterboxes = function (start, end) {
  let mailboxes = Array.from({ length: end - start + 1 }, (_, i) =>
    String(i + start)
  );
  return mailboxes
    .join('')
    .split('')
    .reduce(
      (sum, num) => {
        sum[num] += 1;
        return sum;
      },
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    );
};

console.log(paintLetterboxes(125, 132)); // [1, 9, 6, 3, 0, 1, 1, 1, 1, 1]
