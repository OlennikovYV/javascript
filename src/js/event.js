function bouncingBall(h, bounce, window) {
    let countSee = 0;

    function checkconditions() {
        if (h > 0 && h > window && bounce > 0 && bounce < 1) return 1;
        return 0;
    }

    if (!checkconditions()) return -1;

    countSee++;
    h *= bounce;

    while (h > window) {
        countSee += 2;
        h *= bounce;
    }

    return countSee;
}

console.log(bouncingBall(3.0, 0.66, 1.5)); //3
console.log(bouncingBall(30.0, 0.66, 1.5)); //15
console.log(bouncingBall(2.0, 0.5, 1)); //1
console.log(bouncingBall(3.0, 0.66, 1.5)); //3
console.log(bouncingBall(30.0, 0.66, 1.5)); //15
console.log(bouncingBall(30, 0.75, 1.5)); //21
console.log(bouncingBall(30, 0.4, 10)); //3
console.log(bouncingBall(40, 0.4, 10)) //3
console.log(bouncingBall(10, 0.6, 10)); //-1
console.log(bouncingBall(40, 1, 10)); //-1
console.log(bouncingBall(-5, 0.66, 1.5)); //-1
console.log(bouncingBall(5, -1, 1.5)); //-1
console.log(bouncingBall(4.0, 0.25, 1)); //1