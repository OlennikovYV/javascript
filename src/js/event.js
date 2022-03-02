function anagrams(word, words) {
    const sortWord = w => [...w].sort().join('');
    word = sortWord(word);
    return words.filter(e => word === sortWord(e));
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])); // ['aabb', 'bbaa']
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])); // ['carer', 'racer']
console.log(anagrams('laser', ['lazing', 'lazy', 'lacer'])); // []