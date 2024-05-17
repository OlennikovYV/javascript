function args(cmd) {
  const injectOtherCmd = cmd.trim().replace(/[ ]*[&|;|>|\|].*/, '');

  return injectOtherCmd.split(' ');
}

console.log(args('ls -R /'));
// ['ls', '-R', '/']
console.log(args('cat /tmp/data.txt | less'));
// ['cat', '/tmp/data.txt']
