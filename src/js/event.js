function getDrinkByProfession(param) {
  const table = {
    jabroni: 'Patron Tequila',
    'school counselor': 'Anything with Alcohol',
    programmer: 'Hipster Craft Beer',
    'bike gang member': 'Moonshine',
    politician: 'Your tax dollars',
    rapper: 'Cristal',
  };

  const key = param.toLowerCase();

  return table[key] ? table[key] : 'Beer';
}

console.log(getDrinkByProfession('jabrOni')); // 'Patron Tequila'
console.log(getDrinkByProfession('scHOOl counselor')); // 'Anything with Alcohol'
console.log(getDrinkByProfession('prOgramMer')); // 'Hipster Craft Beer'
console.log(getDrinkByProfession('bike ganG member')); // 'Moonshine'
console.log(getDrinkByProfession('poLiTiCian')); // 'Your tax dollars'
console.log(getDrinkByProfession('rapper')); // 'Cristal'
console.log(getDrinkByProfession('pundit')); // 'Beer'
console.log(getDrinkByProfession('Pug')); // 'Beer'
