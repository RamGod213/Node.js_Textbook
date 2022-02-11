const fs = require('fs');

const readStream = fs.createReadStream('./3.6/readme4.txt');
console.log('읽기 완료');

const writeStream = fs.createWriteStream('./3.6/writeme3.txt');
console.log('쓰기 완료');

readStream.pipe(writeStream);
