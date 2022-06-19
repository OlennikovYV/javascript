const ultimateReverse = s => {
  let reverseString = [...s.join('')].reverse();

  return s.map(word => reverseString.splice(0, word.length).join(''));
};

console.log(
  ultimateReverse(['I', 'like', 'big', 'butts', 'and', 'I', 'cannot', 'lie!'])
); // ['!', 'eilt', 'onn', 'acIdn', 'ast', 't', 'ubgibe', 'kilI'];
