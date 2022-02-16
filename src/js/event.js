function order(words) {
    let arrSortWords;
    const findIndex = word => {
        const i = word.search(/[1-9]/);
        return word[i];
    };

    if (words == '') return '';

    words = words.split(' ');
    arrSortWords = new Array(words.length);

    for (let i = 0; i < words.length; i++) {
        let index = findIndex(words[i]);
        arrSortWords[index - 1] = words[i];
    }

    return arrSortWords.join(' ');
}

console.log(order('is2 Thi1s T4est 3a'));