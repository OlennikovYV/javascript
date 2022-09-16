function getStrings(city) {
  let result = [];
  const countChars = city
    .toLowerCase()
    .replace(/ /g, '')
    .split('')
    .reduce((counts, char) => {
      counts[char] = (counts[char] || '') + '*';
      return counts;
    }, {});

  for (let char in countChars) {
    result.push(`${char}:${countChars[char]}`);
  }

  return result.join(',');
}

console.log(getStrings('Chicago')); // 'c:**,h:*,i:*,a:*,g:*,o:*'
console.log(getStrings('Bangkok')); // 'b:*,a:*,n:*,g:*,k:**,o:*'
console.log(getStrings('Las Vegas')); // 'l:*,a:**,s:**,v:*,e:*,g:*'
