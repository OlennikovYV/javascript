function spoonerize(words) {
  const wordsArray = words.split(' ');
  const firstChar = words[0][0];

  wordsArray[0] = wordsArray[wordsArray.length - 1][0] + wordsArray[0].slice(1);
  wordsArray[wordsArray.length - 1] =
    firstChar + wordsArray[wordsArray.length - 1].slice(1);

  return wordsArray.join(' ');
}

console.log(spoonerize('nit picking')); // 'pit nicking'
console.log(spoonerize('wedding bells')); // 'bedding wells'
console.log(spoonerize('jelly beans')); // 'belly jeans'
