function findAdded(st1, st2) {
  const calculateCountNumber = list =>
    list.reduce((counts, number) => {
      counts[number] = (counts[number] || 0) + 1;
      return counts;
    }, {});
  let listNumbers = '';
  const countNumbers1 = calculateCountNumber([...st1]);
  const countNumbers2 = calculateCountNumber([...st2]);

  for (let key in countNumbers2) {
    if (countNumbers1[key] == undefined) {
      listNumbers += key.repeat(countNumbers2[key]);
    }
  }

  for (let key in countNumbers1) {
    let countNumbersFind = countNumbers2[key] - countNumbers1[key];

    if (countNumbersFind > 0) listNumbers += key.repeat(countNumbersFind);
  }

  return [...listNumbers].sort().join('');
}

console.log(findAdded('44554466', '447554466')); // '7'
console.log(findAdded('9876521', '9876543211')); // '134'
console.log(findAdded('4455446', '447555446666')); // '56667'
console.log(findAdded('678', '876')); // ''
console.log(findAdded('678', '6')); // ''
