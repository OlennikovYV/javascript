var filterLucky = x => {
  return x.filter(number => /7/.test(number));
};

console.log(filterLucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17])); // [7, 70, 17]
console.log(filterLucky([71, 9907, 69])); // [71, 9907]);
