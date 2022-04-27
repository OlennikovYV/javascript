function howMuchILoveYou(nbPetals) {
    const petals = [
        'I love you',
        'a little',
        'a lot',
        'passionately',
        'madly',
        'not at all',
    ];

    return nbPetals % petals.length !== 0 ?
        petals[(nbPetals % petals.length) - 1] :
        petals[petals.length - 1];
}

console.log(howMuchILoveYou(7)); // "I love you"
console.log(howMuchILoveYou(3)); // "a lot"
console.log(howMuchILoveYou(6)); // "not at all"