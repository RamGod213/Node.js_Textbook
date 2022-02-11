const fs = require('fs');

const readStream = fs.createReadStream('./3.6/readme3.txt', { highWaterMark: 16 });
const data = [];

readStream.on('data', (chunk) => {
  data.push(chunk);
  console.log('data :', chunk, chunk.length);
});

readStream.on('end', () => {
  console.log('end :', Buffer.concat(data).toString());
  // console.log('end :', data.toString());
});

readStream.on('error', (err) => {
  console.log('error :', err);
});
