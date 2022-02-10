function openOrSenior(data) {
    /*     let club = [];

        for (let member of data)
            (member[0] >= 55 && member[1] >= 7) ? club.push('Senior') : club.push('Open');

        return club; */

    return data.reduce((club, member) => {
        club.push((member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open');
        return club;
    }, []);
}

console.log(openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20]
]));
console.log(openOrSenior([
    [3, 12],
    [55, 1],
    [91, -2],
    [53, 23]
]));
console.log(openOrSenior([
    [59, 12],
    [55, -1],
    [12, -2],
    [12, 12]
]));