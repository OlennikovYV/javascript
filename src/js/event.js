function args(cmd) {
  return cmd
    .replace(/[&;>|].*$/, '')
    .trim()
    .split(' ');
}

console.log(args('ls -R /'));
// ['ls', '-R', '/']
console.log(args('cat /tmp/data.txt | less'));
// ['cat', '/tmp/data.txt']
