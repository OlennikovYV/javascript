function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    if (dolphin) sharkSpeed /= 2;

    return pontoonDistance / youSpeed < sharkDistance / sharkSpeed ?
        `Alive!` :
        `Shark Bait!`;
}

console.log(shark(12, 50, 4, 8, true)); //  "Alive!"
console.log(shark(7, 55, 4, 16, true)); //  "Alive!"
console.log(shark(24, 0, 4, 8, true)); //  "Shark Bait!"
console.log(shark(7, 8, 3, 4, true)); //  "Alive!"
console.log(shark(44, 87, 4, 9, false)); //  "Shark Bait!"