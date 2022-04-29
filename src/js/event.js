function alphanumeric(string) {
    return /^[A-Za-z0-9]+$/.test(string);
}

console.log(alphanumeric("Mazinkaiser")); //  true
console.log(alphanumeric("hello world_")); //  false
console.log(alphanumeric("PassW0rd")); //  true
console.log(alphanumeric("     ")); //  false