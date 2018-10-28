const zlib = require('zlib');

const input = 'vamshi krishna ';

zlib.deflate(input, (err, buffer) => {
  if (!err) {
    console.log(buffer.toString('ascii'));
  } else {
    console.log(`error is ${err}`);
  }
	//comment coe her e for verison 2 
});
