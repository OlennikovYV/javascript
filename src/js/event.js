function queueTime(customers, n) {
    let selfCheckout = Array(n).fill(0);

    for (let timeCustomer of customers) {
        const indexInQueue = selfCheckout
            .indexOf(Math.min(...selfCheckout));
        selfCheckout[indexInQueue] += timeCustomer;
    }

    return Math.max(...selfCheckout);
}

console.log(queueTime([], 1)); //  0
console.log(queueTime([1, 2, 3, 4], 1)); //  10
console.log(queueTime([2, 2, 3, 3, 4, 4], 2)); //  9
console.log(queueTime([1, 2, 3, 4, 5], 100)); //  5
console.log(queueTime([32, 50, 12, 14, 28, 4, 38, 8, 19, 24, 22, 4, 11, 35, 4, 7, 22], 3)); //  117