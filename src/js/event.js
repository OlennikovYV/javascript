function solution(input, markers) {
    return input
        .replace(new RegExp(`\s*[${markers.join('')}].+`, 'g'), '')
        .split('\n')
        .map(el => el.trim())
        .join('\n');
};

console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"])); // "apples, plums\npears\noranges"
console.log(solution("Q @b\nu\ne -e f g", ["@", "-"])); // "Q\nu\ne"