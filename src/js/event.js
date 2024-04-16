function reverseVowels(str) {
  let arrVowels = str.replace(/[^aeiou]/gi, '').split('');

  return str.replace(/[aeiou]/gi, _ => arrVowels.pop());
}

console.log(reverseVowels('Apache')); // 'epachA'
console.log(reverseVowels('Hello!')); // 'Holle!'
console.log(reverseVowels('Tomatoes')); // 'Temotaos'
console.log(reverseVowels('Reverse Vowels In A String')); // 'RivArsI Vewols en e Streng'
console.log(reverseVowels('Oh my goodness')); // 'eh my goodnOss'
console.log(reverseVowels('The quick brown fox jumped over the lazy dog')); // 'Tho qaeck brewn fox jempud ovor thi luzy deg'
