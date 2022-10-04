function autocomplete(input, dictionary) {
  let regex;

  input = input
    .split('')
    .filter(char => !'-~! @#$%^&*()_+1234567890'.includes(char))
    .join('');

  regex = new RegExp(`^(${input})`, 'i');

  return dictionary.filter(word => regex.test(word)).slice(0, 5);
}

console.log(autocomplete('ai', ['airplane', 'airport', 'apple', 'ball']));
// ['airplane','airport']

console.log(
  autocomplete('a-~! @#$%^&*()_+1234567890', [
    'airplane',
    'apple',
    'air',
    'avenue',
    'airport',
    'adamantium',
    'awkwardness',
    'awesome',
    'amazing',
    'ball',
    'book',
    'bike',
    'bill',
    'billiard',
    'bell',
    'bowl',
    'inconceivable',
    'jump',
    'jumping',
    'judge',
    'judging',
  ])
); // ['airplane', 'apple', 'air', 'avenue', 'airport']'
