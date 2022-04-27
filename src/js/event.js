function howMuchILoveYou(nbPetals) {
    const petals = [
        'not at all',
        'I love you',
        'a little',
        'a lot',
        'passionately',
        'madly',
    ];

    return petals[nbPetals % petals.length];
}

console.log(howMuchILoveYou(7)); // "I love you"
console.log(howMuchILoveYou(3)); // "a lot"
console.log(howMuchILoveYou(6)); // "not at all"