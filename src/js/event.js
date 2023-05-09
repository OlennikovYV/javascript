function grabscrab(anagram, dictionary) {
  const sort = word => word.split('').sort().join('');
  const sortAnagram = sort(anagram);

  return dictionary.filter(word => sort(word) === sortAnagram);
}

console.log(grabscrab('trisf', ['first']));
// ['first']
console.log(grabscrab('oob', ['bob', 'baobab']));
// []
console.log(grabscrab('ainstuomn', ['mountains', 'hills', 'mesa']));
// ['mountains']
console.log(grabscrab('oolp', ['donkey', 'pool', 'horse', 'loop']));
// ['pool', 'loop']
console.log(grabscrab('ortsp', ['sport', 'parrot', 'ports', 'matey']));
// ['sport', 'ports']
console.log(grabscrab('ourf', ['one', 'two', 'three']));
// []
