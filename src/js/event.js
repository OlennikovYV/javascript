function roundIt(n) {
  const locationPoint = num => {
    const [left, right] = String(num).split('.');

    return left.length > right.length
      ? 'left'
      : left.length < right.length
      ? 'right'
      : 'equal';
  };

  switch (locationPoint(n)) {
    case 'left':
      return Math.floor(n);
    case 'right':
      return Math.ceil(n);
    case 'equal':
      return Math.round(n);
  }
}

console.log(roundIt(3.45)); // 4
console.log(roundIt(34.5)); // 34
console.log(roundIt(34.56)); // 35
