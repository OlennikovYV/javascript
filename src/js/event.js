function reverseByCenter(s) {
  const length = s.length;
  const oddLength = length % 2;
  const lengthPart = oddLength ? Math.floor(length / 2) : length / 2;
  let leftPart = s.slice(0, lengthPart);
  let rigthPart = s.slice(-lengthPart);

  [leftPart, rigthPart] = [rigthPart, leftPart];

  return leftPart + (oddLength ? s[lengthPart] : '') + rigthPart;
}

console.log(reverseByCenter('secret')); // 'retsec'
console.log(reverseByCenter('agent')); // 'nteag'
console.log(reverseByCenter('raw')); // 'war'
console.log(reverseByCenter('onion')); // 'onion'
