const fs = require('fs');

console.log('파일 호출');

fs.readFile('./3.6/readme.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
  console.log(data.toString());  
});

console.log('파일 호출 끝?');