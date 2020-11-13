const { printCurrentDirectory } = require('./pwd.js');
const { listFiles } = require('./ls.js');

require('./pwd.js');
require('./ls.js');

//console.log(printCurrentDirectory(), 'I work!');

process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  // const cmd = data.toString().trim()
  let cmd;
  if (data.toString().trim() === 'pwd') {
    cmd = printCurrentDirectory();
  }
  if (data.toString().trim() === 'ls') {
    cmd = listFiles();
  } else {
    cmd = data.toString().trim();
  }

  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
});
