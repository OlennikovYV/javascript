const ultimateReverse = s => {
  let indexBegin = 0;
  let indexEnd;
  let result = [];
  const reverseString = s.join('').split('').reverse().join('');

  for (let i = 0; i < s.length; i += 1) {
    indexEnd = indexBegin + s[i].length;
    result.push(reverseString.slice(indexBegin, indexEnd));
    indexBegin = indexEnd;
  }

  return result;
};

console.log(
  ultimateReverse(['I', 'like', 'big', 'butts', 'and', 'I', 'cannot', 'lie!'])
); // ['!', 'eilt', 'onn', 'acIdn', 'ast', 't', 'ubgibe', 'kilI'];
