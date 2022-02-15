function disemvowel(str) {
    return [...str.matchAll(/[^aeiou]/ig)].join('');
}

console.log(disemvowel('O zax dead for'));
console.log(disemvowel('This website is for losers LOL!'));