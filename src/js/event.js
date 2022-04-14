function queueTime(customers, n) {
    let selfCheckout = Array.from(Array(n), e => 0);
    let queuesTime = 0;
    let time = 0;

    do {
        selfCheckout.forEach((el, i) => {
            if (el === 0 && customers.length > 0) {
                let customer = customers.shift();
                if (customer)
                    selfCheckout[i] = customer;
            }
        })

        queuesTime = Math.min(...selfCheckout);
        selfCheckout = selfCheckout.map(e => e - queuesTime);
        time += queuesTime;
    }
    while (customers.length > 0)

    queuesTime = Math.max(...selfCheckout);
    time += queuesTime;

    return time
}

console.log(queueTime([], 1)); //  0
console.log(queueTime([1, 2, 3, 4], 1)); //  10
console.log(queueTime([2, 2, 3, 3, 4, 4], 2)); //  9
console.log(queueTime([1, 2, 3, 4, 5], 100)); //  5
console.log(queueTime([32, 50, 12, 14, 28, 4, 38, 8, 19, 24, 22, 4, 11, 35, 4, 7, 22], 3)); //  117