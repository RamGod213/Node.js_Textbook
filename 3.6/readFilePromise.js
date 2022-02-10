const fs = require('fs').promises;

console.log('파일 호출');

fs.readFile('./3.6/readme.txt')
  .then((data) => {
    console.log(data);
    console.log(data.toString());
    console.log('호출 끝');
  })
  .catch((err) => {
    console.error(err);
  });


console.log('파일 호출 끝?');