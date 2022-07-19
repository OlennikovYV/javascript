function charFreq(message) {
  return message.split('').reduce((object, char) => {
    object[char] ? (object[char] += 1) : (object[char] = 1);
    return object;
  }, {});
}

console.log(charFreq('I like cats'));
// {a: 1, ' ': 2, c: 1, e: 1, I: 1, k: 1, l: 1, i: 1, s: 1, t: 1}
