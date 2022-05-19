function evaporator(content, evap_per_day, threshold) {
    let days = 0;
    let thresholdML = 0;

    threshold = content - content / 100 * threshold;

    while (thresholdML < threshold) {
        const evap = content / 100 * evap_per_day;
        thresholdML += evap;
        content -= evap;
        days++;
    }

    return days;
}

console.log(evaporator(10, 10, 10)); // 22
console.log(evaporator(10, 10, 5)); // 29