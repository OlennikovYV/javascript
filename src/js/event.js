function autocomplete(input, dictionary) {
  regex = new RegExp(`^(${input.replace(/[^a-z]/gi, '')})`, 'i');

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
