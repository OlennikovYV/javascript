const reg = /".+?"/g;
function getQuotes(string) {
  return string.match(reg);
}

console.log(
  getQuotes(
    '"Winners never quit and quitters never win." - Vince Lombardi, "My motto is, \'Never quit.\'" - Henry Rollins'
  )
);
// [
//   '"Winners never quit and quitters never win."',
//   '"My motto is, \'Never quit.\'"',
// ]
