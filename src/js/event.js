function looseChange(cents) {
  let result = { Quarters: 0, Dimes: 0, Nickels: 0, Pennies: 0 };
  const dictionaryNames = ['Quarters', 'Dimes', 'Nickels', 'Pennies'];
  const dictionaryAmounts = [25, 10, 5, 1];

  let summaInCents = Math.floor(cents);

  if (cents <= 0) return result;

  return dictionaryNames.reduce((counts, name, index) => {
    const count = Math.floor(summaInCents / dictionaryAmounts[index]);
    counts[name] = count;
    summaInCents -= count * dictionaryAmounts[index];
    return counts;
  }, result);
}

console.log(looseChange(56)); // { Nickels: 1, Pennies: 1, Dimes: 0, Quarters: 2 }
console.log(looseChange(100)); // { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 4 }
console.log(looseChange(0)); // { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 }
console.log(looseChange(-3)); // { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 },
console.log(looseChange(7.9)); // { Nickels: 1, Pennies: 2, Dimes: 0, Quarters: 0 }
