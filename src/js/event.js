function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    let diffSpeed;
    let diffDistance;
    let timeCatch;

    if (dolphin) sharkSpeed /= 2;
    if (sharkDistance <= pontoonDistance) return `Shark Bait!`;
    if (sharkSpeed <= youSpeed) return `Alive!`;

    diffSpeed = sharkSpeed - youSpeed;
    diffDistance = sharkDistance - pontoonDistance;
    timeCatch = diffDistance / diffSpeed;
    distanceCath = timeCatch * sharkSpeed;


    return distanceCath > sharkDistance ?
        `Alive!` :
        `Shark Bait!`;
}

console.log(shark(12, 50, 4, 8, true)); //  "Alive!"
console.log(shark(7, 55, 4, 16, true)); //  "Alive!"
console.log(shark(24, 0, 4, 8, true)); //  "Shark Bait!"
console.log(shark(7, 8, 3, 4, true)); //  "Alive!"
console.log(shark(44, 87, 4, 9, false)); //  "Shark Bait!"