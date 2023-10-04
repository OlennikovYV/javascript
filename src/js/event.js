function generateHashtag(str) {
  let hashtag;

  if (str.trim().length === 0) return false;

  hashtag = str
    .split(' ')
    .reduce(
      (hash, word) =>
        word.length === 0
          ? hash
          : hash + word[0].toUpperCase() + word.slice(1).toLowerCase(),
      ''
    );

  return hashtag.length < 140 ? `#${hashtag}` : false;
}

console.log(generateHashtag(''));
// false
console.log(generateHashtag(' '.repeat(200)));
// false
console.log(generateHashtag('Do We have A Hashtag'));
// '#DoWeHaveAHashtag'
console.log(generateHashtag('Codewars'));
// '#Codewars'
console.log(generateHashtag('Codewars Is Nice'));
// '#CodewarsIsNice'
console.log(generateHashtag('Codewars is nice'));
// '#CodewarsIsNice'
console.log(generateHashtag('code' + ' '.repeat(140) + 'wars'));
// '#CodeWars
console.log(
  generateHashtag(
    'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat'
  )
);
// false
console.log(generateHashtag('a'.repeat(139)));
// '#A' + 'a'.repeat(138)
console.log(generateHashtag('a'.repeat(140)));
// false
