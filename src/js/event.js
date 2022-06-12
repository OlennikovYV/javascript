var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    let text = [];
    let sum = 0;

    if (count === 0) return `0=0`;
    if (count < 0) return `${count}<0`;

    for (let i = 0; i <= count; i += 1) {
      text.push(i);
      sum += i;
    }

    return `${text.join('+')} = ${sum}`;
  };

  return SequenceSum;
})();

console.log(SequenceSum.showSequence(6)); // "0+1+2+3+4+5+6 = 21"
