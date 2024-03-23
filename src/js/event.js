function insideOut(x) {
  const charInside = word => {
    const halfLength = Math.floor(word.length / 2);
    let left, center, right;

    if (word.length % 2 == 0) {
      left = word.slice(0, halfLength);
      center = '';
      right = word.slice(halfLength);
    } else {
      left = word.slice(0, halfLength);
      center = word[Math.floor(halfLength)];
      right = word.slice(halfLength + 1);
    }

    left = left.split('').reverse().join('');
    right = right.split('').reverse().join('');

    return [left, center, right].join('');
  };

  return x
    .split(' ')
    .map(el => charInside(el))
    .join(' ');
}

console.log(insideOut('man i need a taxi up to ubud')); // 'man i ende a atix up to budu'
console.log(insideOut('what time are we climbing up the volcano')); // 'hwta item are we milcgnib up the lovcona'
console.log(insideOut('take me to semynak')); // 'atek me to mesykan'
