function getVillainName(birthday) {
  const m = [
    'Evil',
    'Vile',
    'Cruel',
    'Trashy',
    'Despicable',
    'Embarrassing',
    'Disreputable',
    'Atrocious',
    'Twirling',
    'Orange',
    'Terrifying',
    'Awkward',
  ];
  const d = [
    'Mustache',
    'Pickle',
    'Hood Ornament',
    'Raisin',
    'Recycling Bin',
    'Potato',
    'Tomato',
    'House Cat',
    'Teaspoon',
    'Laundry Basket',
  ];
  const firstName = m[birthday.getMonth()];
  const lastName = d[birthday.getDate() % 10];

  return `The ${firstName} ${lastName}`;
}

//may 3
console.log(getVillainName(new Date('May 3')));
//

//apr 1
console.log(getVillainName(new Date('April 21')));
//

//dec 7
console.log(getVillainName(new Date('December 17')));
//
