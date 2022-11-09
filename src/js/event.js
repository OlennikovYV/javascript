const max = { name: 'Max Headroom' };

function getMax1() {
  return max;
}

function getMax2() {
  return max;
}

console.log(getMax2() == getMax1()); // true
