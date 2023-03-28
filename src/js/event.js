function sabb(s, val, happiness) {
  return 22 >= happiness + val + s.replace(/[^sabticl]/g, '').length
    ? 'Back to your desk, boy.'
    : 'Sabbatical! Boom!';
}

console.log(sabb('Can I have a sabbatical?', 5, 5));
// 'Sabbatical! Boom!'
console.log(sabb('Why are you shouting?', 7, 2));
// 'Back to your desk, boy.'
console.log(sabb('What do you mean I cant learn to code??', 8, 9));
// 'Sabbatical! Boom!'
console.log(sabb('Please calm down', 9, 1));
// 'Back to your desk, boy.');
