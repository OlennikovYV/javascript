function solution(str) {
    return (str + '_').match(/../g) || [];
}

console.log(solution("abcdef")); //  ["ab", "cd", "ef"]
console.log(solution("abcdefg")); //  ["ab", "cd", "ef", "g_"]
console.log(solution("")); //  []