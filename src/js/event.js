function grabDoll(dolls) {
  return dolls
    .filter(doll => doll == 'Hello Kitty' || doll == 'Barbie doll')
    .slice(0, 3);
}

console.log(grabDoll(['Mickey Mouse', 'Hello Kitty', 'Snow white']));
//  ['Hello Kitty']
console.log(
  grabDoll(['Mickey Mouse', 'Hello Kitty', 'Hello Kitty', 'Snow white'])
);
//  ['Hello Kitty', 'Hello Kitty']
console.log(
  grabDoll([
    'Mickey Mouse',
    'Hello Kitty',
    'Hello Kitty',
    'Barbie doll',
    'Snow white',
  ])
);
//  ['Hello Kitty', 'Hello Kitty', 'Barbie doll']
console.log(
  grabDoll([
    'Mickey Mouse',
    'Barbie doll',
    'Hello Kitty',
    'Hello Kitty',
    'Hello Kitty',
    'Snow white',
  ])
);
//  ['Barbie doll', 'Hello Kitty', 'Hello Kitty']
