function titleCase(title, minorWords) {
    const firstCharUpper = text => text[0].toUpperCase() + text.slice(1);

    if (!title) return '';

    title = title.toLowerCase().split(' ');
    minorWords = (minorWords) ? minorWords.toLowerCase().split(' ') : [];

    return title
        .map((el, i) => {
            if (i === 0) return firstCharUpper(el);
            if (minorWords.indexOf(el) !== -1) return el;
            return firstCharUpper(el);
        })
        .join(' ');
}

console.log(titleCase('')); //  ''
console.log(titleCase('a clash of KINGS', 'a an the of')); //  'A Clash of Kings'
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In')); //  'The Wind in the Willows'
console.log(titleCase('the quick brown fox')); //  'The Quick Brown Fox'
console.log(titleCase('First a of in', 'an often into')); //  'First a of in'