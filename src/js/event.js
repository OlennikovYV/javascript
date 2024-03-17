function sort(items) {
  const length = items.length;

  if (length < 2) return items;

  for (let i = 0; i < length - 1; i++)
    for (let j = i + 1; j < length; j++) {
      const a = items[i];
      const b = items[j];

      if (a > b) [items[i], items[j]] = [items[j], items[i]];
    }

  return items;
}

console.log(sort([1, 3, 2])); // [1, 2, 3]
console.log(sort([1, 3, 2, 3, 4, 1])); // [1, 1, 2, 3, 3, 4]
console.log(sort([4, 1, 3, 2, 2, 3, 4, 1])); // [1, 1, 2, 2, 3, 3, 4, 4]
console.log(sort([1])); // [1]
console.log(sort([10, 11, 9])); // [9, 10, 11]
console.log(sort(['abc', 'adc', 'acc'])); // ['abc', 'acc', 'adc']
