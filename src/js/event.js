function pillars(num_pill, dist, width) {
    return (num_pill > 1) ?
        (num_pill - 2) * width + (num_pill - 1) * dist * 100 :
        0;
}

console.log(pillars(1, 10, 10)); //  0
console.log(pillars(2, 20, 25)); //  2000
console.log(pillars(3, 20, 25)); //  4025
console.log(pillars(11, 15, 30)); //  15270