function checkName() {
  const listNames = [];

  return function (name) {
    if (listNames.includes(name)) throw Error('Error');

    listNames.push(name);
  };
}

const handOutGift = checkName();

console.log(handOutGift('Peter')); // no error
console.log(handOutGift('Alison')); // no error
console.log(handOutGift('John')); // no error
console.log(handOutGift('Maria')); // no error

try {
  handOutGift('Peter');
} catch (error) {
  console.log('Error');
}
