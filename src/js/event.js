function findLongest(str) {
    const arrLength = str.split(' ').map(el => el.length);
    return Math.max(...arrLength);
}

console.log(findLongest("The quick white fox jumped around the massive dog")); //  7
console.log(findLongest("Take me to tinseltown with you")); //  10
console.log(findLongest("Sausage chops")); //  7
console.log(findLongest("Wind your body and wiggle your belly")); //  6
console.log(findLongest("Lets all go on holiday")); //  7