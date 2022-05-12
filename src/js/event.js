function chromosomeCheck(sperm) {
    return `Congratulations! You're going to have a ${sperm === 'XY' ? 'son' : 'daughter'}.`;
}

console.log(chromosomeCheck('XY')); //  "Congratulations! You're going to have a son."
console.log(chromosomeCheck('XX')); //  "Congratulations! You're going to have a daughter."