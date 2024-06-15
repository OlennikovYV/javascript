function gap(num) {
  const gaps = num.toString(2).match(/1[0]+(?=1)/g);
  const maxGaps = gaps ? Math.max(...gaps.map(el => el.length - 1)) : 0;

  return maxGaps;
}

console.log(gap(9)); //2
console.log(gap(529)); //4
console.log(gap(20)); //1
console.log(gap(15)); //0
