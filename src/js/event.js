function sortedBrands(history) {
  const historyWithoutDup = history.filter(
    (current, i, arr) =>
      arr.findIndex(last => last.brand === current.brand) === i
  );
  const historyWithPopularity = history.reduce((popular, el) => {
    const brand = el.brand;

    popular[brand] = (popular[brand] || 0) + 1;
    return popular;
  }, {});
  const result = [...historyWithoutDup]
    .sort((a, b) => {
      const brandA = a.brand;
      const brandB = b.brand;
      const popularSort =
        historyWithPopularity[brandB] - historyWithPopularity[brandA];

      if (popularSort == 0)
        return (
          historyWithoutDup.findIndex(el => el.brand == brandA) -
          historyWithoutDup.findIndex(el => el.brand == brandB)
        );

      return popularSort;
    })
    .map(el => el.brand);

  return result;
}

const phoneSamsung = { name: 'Samsung Phone', price: 25, brand: 'Samsung' };
const phoneIphone = { name: 'iPhone', price: 20000, brand: 'iPhone' };

console.log(sortedBrands([])); // []
console.log(sortedBrands([phoneSamsung])); // ['Samsung']
console.log(sortedBrands([phoneIphone, phoneIphone, phoneIphone])); // ['iPhone'],

console.log(
  sortedBrands([
    phoneSamsung,
    phoneIphone,
    phoneIphone,
    phoneIphone,
    phoneSamsung,
    phoneSamsung,
  ])
);
// ['Samsung', 'iPhone']
console.log(
  sortedBrands([
    { name: 'LG Phone1', price: 35, brand: 'LG' },
    { name: 'LG Phone2', price: 25, brand: 'LG' },
    { name: 'Samsung Phone1', price: 25, brand: 'Samsung' },
  ])
); // ['LG', 'Samsung']
console.log(
  sortedBrands([
    { name: 'LG Phone1', price: 35, brand: 'LG' },
    { name: 'Samsung Phone1', price: 25, brand: 'Samsung' },
    { name: 'LG Phone2', price: 25, brand: 'LG' },
    { name: 'Nokia Phone1', price: 2, brand: 'Nokia' },
    { name: 'Nokia Phone2', price: 2, brand: 'Nokia' },
    { name: 'Samsung Phone2', price: 5, brand: 'Samsung' },
    { name: 'Samsung Phone3', price: 15, brand: 'Samsung' },
    { name: 'Samsung Phone2', price: 5, brand: 'Samsung' },
  ])
); // ['Samsung', 'LG', 'Nokia']
