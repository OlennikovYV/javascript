function reverseVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const arrStr = [...str];
  const arrVowels = [];
  const countVowels = arrStr.filter((char, index) => {
    if (vowels.includes(char.toLowerCase())) {
      arrVowels.push({ index, char });
      return true;
    } else {
      return false;
    }
  }).length;
  const halfVowels = Math.floor(countVowels / 2);

  for (let i = 0; i < halfVowels; i++) {
    const leftVowel = arrVowels[i];
    const rightVowel = arrVowels[arrVowels.length - i - 1];

    arrStr[leftVowel.index] = rightVowel.char;
    arrStr[rightVowel.index] = leftVowel.char;
  }

  return arrStr.join('');
}

console.log(reverseVowels('Apache')); // 'epachA'
console.log(reverseVowels('Hello!')); // 'Holle!'
console.log(reverseVowels('Tomatoes')); // 'Temotaos'
console.log(reverseVowels('Reverse Vowels In A String')); // 'RivArsI Vewols en e Streng'
console.log(reverseVowels('Oh my goodness')); // 'eh my goodnOss'
console.log(reverseVowels('The quick brown fox jumped over the lazy dog')); // 'Tho qaeck brewn fox jempud ovor thi luzy deg'
