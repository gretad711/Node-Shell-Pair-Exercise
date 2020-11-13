// process.stdout.write('prompt > ');

function printCurrentDirectory() {
  let cmd;

  cmd = process.cwd();

  return cmd;
}

module.exports = { printCurrentDirectory };
