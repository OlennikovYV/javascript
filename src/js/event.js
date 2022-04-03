function solution(input, markers) {
    return input
        .split('\n')
        .map(el => {
            markers.forEach(mark => {
                const ind = el.indexOf(mark);
                if (ind > -1)
                    el = el.slice(0, ind);
            });
            return el.trimEnd();
        })
        .join('\n');
};

console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"])); // "apples, plums\npears\noranges"
console.log(solution("Q @b\nu\ne -e f g", ["@", "-"])); // "Q\nu\ne"