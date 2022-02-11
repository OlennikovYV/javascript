function accum(s) {
    return s.toLowerCase().split('').map((el, idx) => {
        return el.toUpperCase() + el.toLowerCase().repeat(idx)
    }).join('-')
}

console.log(accum('abcd'));
console.log(accum('AbRaC'));