function alphanumeric(string) {
    return /^[a-z\d]+$/i.test(string);
}

console.log(alphanumeric("Mazinkaiser")); //  true
console.log(alphanumeric("hello world_")); //  false
console.log(alphanumeric("PassW0rd")); //  true
console.log(alphanumeric("     ")); //  false